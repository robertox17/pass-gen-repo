

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min,max){
if (!max) {
  max = min 
  min = 0
}
var rand = Math.random()
return Math.floor(min*(1-rand)+ rand*max)
}
function getRandomItem(List){
  return List[randomInt(List.length)]
}

function generatePassword() {

  var enterNum = window.prompt("how long do you want your password");

  var LengthPass = parseInt(enterNum)

  if (isNaN(LengthPass)) {
    window.alert("please use a number")
    return
  }

  if (LengthPass <= 8 || LengthPass > 128) {
    window.alert("Password Length must be between 8 and 128 characters!")
    return
  }

  var randomLowerLtr = confirm("do you want lower case letter ");
  var randomUpperLtr = confirm("do you want Upper case letter ");
  var randomNumS = confirm("do you want random number ");
  var randomSym = confirm("do you want special charters");

  var LowerLtr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  var UpperLtr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  var NumS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var Symbols = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
    
  var containerList = []

  if (randomLowerLtr === true) {
    containerList.push(LowerLtr)
  }
  if (randomUpperLtr === true) {
    containerList.push(UpperLtr)
  }
  if (randomNumS === true) {
    containerList.push(NumS)
  }
  if (randomSym === true) {
    containerList.push(Symbols)
  }
  if(containerList.length === 0){
    containerList.push(UpperLtr)
  }
  
  var generatePassword = ""

  for(var i = 0;i < LengthPass; i++) {
    var randomList = getRandomItem(containerList)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }
   
  return generatePassword
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

