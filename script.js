// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var SpecialCharArray = "~!@#$%^&*()_+`=-<>?:';/.,".split("");
var NumberArray = "0123456789".split("");

// var logicArr = [[]];
var lowerCaseChoice = confirm("Do you want lower case?");
var upperCaseChoice = confirm("Do you want upper case?");
var SpecialCharChoice = confirm("Do you want special characters?");
var NumberChoice = confirm("Do you want numbers?");

var PasswordLengthQ = prompt("Select a length for your password between 8-128 characters");
var PasswordLength = PasswordLengthQ.value;

// console.log(PasswordLength)
console.log(PasswordLengthQ.value)

var logicArr = [];
var finalArr = [];




if(lowerCaseChoice) {
  for(var i = 0; i < lowerCaseArr.length; i++) 
  logicArr.push(lowerCaseArr[i])
  
} 
// 

// else 

if(upperCaseChoice) {
  for(var i = 0; i < upperCaseArr.length; i++)
  logicArr.push(upperCaseArr[i])

} 

// else 


if(SpecialCharChoice) {
  for(var i = 0; i < SpecialCharArray.length; i ++)
  logicArr.push(SpecialCharArray[i])

} 

// else 

if(NumberChoice) {
  for(var i = 0; i< NumberArray.length; i ++)
  logicArr.push(NumberArray[i])
};

console.log(logicArr)

for(var i = 0; i < logicArr.length; i++) {
  finalArr.push(logicArr[Math.floor(Math.random() * logicArr.length)]);
}



console.log(finalArr)


