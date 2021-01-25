const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide the description of your project.',
        },

        {
            type: 'input',
            name: 'install',
            message: 'Please provide installation instructions of your project.',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information of your project.',
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guideline to your project.',
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instruction of your project.',
        },

        {
            type: 'input',
            name: 'name',
            message: 'Please provide your GitHub username.',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select your license.',
            choices: [
                {name: 'Apache',
                value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                },
                {name: 'BSD',
                value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
                },
                {name: 'GNU',
                value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                },  
                {name: 'ISC',
                value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
                },  
                {name: 'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                },  
                {name: 'Mozilla',
                value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                },    
            ],
        },

    ])
};

// function to write README file
const generateREADME = (data) =>
`
# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Contact](#contact)

## Description 
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${data.license}

## Contact
If you have any question about the application, you can reach me at:
GitHub: ${data.name}
Email: ${data.email}
`


// function to initialize program
const init = async () => {
 console.log('hi');
 try {
     const answers = await questions();
     
     const README = generateREADME(answers);
     
     await writeFileAsync('README.md', README);
     console.log('Successfully create README.md, please retrive your file');
 } catch (err) {
     console.log(err);
 }
};

// function call to initialize program
init();
