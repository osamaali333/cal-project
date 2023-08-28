#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import { TIMEOUT } from "dns";


const sleep =()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome(){
    let rainbowTitle= chalkAnimation.rainbow('lets starts calculation');
    await sleep();
    rainbowTitle.stop();

}

welcome();

async function askQuestion(){
   const answer= await inquirer
    .prompt ([
        {
            type:"list",
            name:"operator",
            message:"which operator you want to use?",
            choices:["addition","subtraction","multiplication","division"]
        },
        {
            type:"number",
            name:"num1",
            message:"enter num 1: "
        },
        {
            type:"number",
            name:"num2",
            message:"enter number 2:"
        }
    ])
    if(answer.operator=="addition"){
        console.log(chalk.green(`${answer.num1} + ${answer.num2} =${answer.num1+answer.num2}`));
    }
    else if(answer.operator=="subtraction"){
        console.log(chalk.green(`${answer.num1}-${answer.num2}=${answer.num1-answer.num2}`));
    }
    else if (answer.operator=="multiplication"){
        console.log(chalk.green(`${answer.num1}*${answer.num2}=${answer.num1*answer.num2}`));
    }
    else if(answer.operator=="division"){
        console.log(chalk.green(`${answer.num1}/${answer.num2}=${answer.num1/answer.num2}`))
    }
}
//askQuestion();

async function startAgain(){
    do{
        await askQuestion();
       var again=  await inquirer
        .prompt({
         type:"input",
         name:"restart",
         message:"do you want to continue? press y or n:"

        })
    } while(again.restart == 'y' || again.restart =='YES'|| again.restart =='Yes'|| again.restart=='yes')

}
startAgain();