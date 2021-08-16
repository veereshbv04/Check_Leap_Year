var read = require("readline-sync");
const chalk = require("chalk");
var userName = read.question(chalk.yellow("Enter your name "));
console.log(chalk.bold("Hi, " + userName + " welcome "));
var userYear = read.question(chalk.green("Enter the year in 'YYYY' format "));

function takeInput(){
  const userYear = read.question(chalk.green("Enter the year again "));
  return userYear
}

while(userYear.length !== 4){
  console.log(chalk.yellowBright("You must enter the year in 'YYYY' format" ));
  var userYear = takeInput();
}
leap(userYear);


// if(userYear.length < 4){
//   console.log("Enter in yyyy formate");
//   const userYear = read.question("Enter the year ");
// }else{
// leap(userYear)
// }

function leap(year){

  const leapYear = userYear + " ,is a leap year ";
  const notLepYear = userYear + ",is not a leap year "

  var year = Number(year);
  
  if(year%400 === 0){
    return leapYear
  }
  
  if(year%4 === 0){
    return leapYear
  }

   if(year%100 === 0){
    return notLepYear
  }

  return notLepYear
  
}