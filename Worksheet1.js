//1. Hello, World!
//Exercise:
//You must print out to the console the sentence "Hello, World!".
//Answer:
console.log("Hello, World!");


//2. Variables and Types
//Exercise:
//You must define the following variables:
//1.	A number called myNumber which contains the number 4;
//2.	A string called myString which contains the sentence Variables are great.;
//3.	A boolean called myBoolean which contains the value false;
//Answer:
var myNumber = 4;
var myString = "Variables are great."
var myBoolean = false;
console.log("myNumber is equal to " + myNumber);
console.log("myString is equal to " + myString);
console.log("myBoolean is equal to " + myBoolean);


//3. Arrays
//Exercise:
//You must define an array with the following three variables:
//1.	A string which has the value of "What is the meaning of life?"
//2.	A number which has a value of 42
//3.	A boolean which has a value of true
//Answer:
var myArray = ["What is the meaning of life?", 42, true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);


//4. Manipulating Arrays
//Exercise:
//In this tutorial, you must manipulate the array called myArray and do the following:
//1.	Push the number 42 to the end of the array
//2.	Shift a variable from the beginning of the array
//Answer:
var myArray = [true, "What is the meaning of life?"];
myArray.push(42);
myArray.shift();
console.log(myArray[0]);
console.log(myArray[1]);


//5. Operators
//Exercise:
//In this exercise, you do the following:
//1.	Connect the firstName and lastName to construct the variable fullName, but with a space (" ") in between the first and last name.
//2.	Multiply the variable myNumber by 2 and put the result in meaningOfLife.
//Answer:
var firstName = "John";
var lastName = "Smith";
var myNumber = 21;
var fullName = firstName + " " + lastName;
var meaningOfLife = myNumber * 2;
console.log("The name is " + fullName);
console.log("The meaning of life is " + meaningOfLife);


//6. Conditions
//Exercise:
//In this exercise, you must construct an if inside the checkNumber function statement that checks if the number myNumber is equal to 42. If that is the case, the function must print out using console.log the word correct. If myNumber is not equal to 42, the function must print out using console.log the word incorrect. You can name the argument passed to a function by supplying the name inside the parentheses. For example, function myFunction(myArgument).
//Answer:
function checkNumber(myNumber)
{
      if (myNumber===42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}
checkNumber(3);
checkNumber(7);
checkNumber(42);


//7. Loops
//Exercise:
//In this exercise, you must write a for loop that iterates on the myArray variable and prints out all of its members.
//Answer:
var myArray = ["What is the meaning of life?", "The meaning of life is", 42];
for (var i = 0; i< myArray.length; i++)
{
    console.log(myArray[i]);
}


//8. Objects
//Exercise:
//You must define an object called person with the following members:
//1.	The member firstName of the person is "Jack"
//2.	The member lastName of the person is "Smith"
//3.	The member age of the person is 19
//4.	The member employed of the person is true
//Answer:
var person = {
    firstName: "Jack",
    lastName: "Smith",
    age: 19,
    employed: true
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);


//9. Functions
//Exercise:
//Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
//Answer:
function multiplyFive(number)
{
    return number * 5;
}
console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));


//10. Pop-up Boxes
//Exercise:
//Make a variable test set it equal to a prompt box, and type "Hi!" in it (without the quotes) when it pops up. Note: your pop-up blocker must not be enabled.
//Answer:
var test = prompt();
console.log(test);


//11. Callbacks
//Exercise:
//Define a function called callback which receives an argument and prints it out.
//Answer:
function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}
function callback(argument) 
{
    console.log(argument);
}
useCallback(callback);
