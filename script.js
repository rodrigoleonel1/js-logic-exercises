// // EXERCISE 1
// // Write a function called "isPalindrome" that takes a string as an argument and returns true if the string is a palindrome and false otherwise. A palindrome is a word, phrase, number, or any other sequence of characters that reads the same forward as backward, ignoring spaces, punctuation, and capital letters.

// function isPalindrome(string) {
//   //The function convert the text to lowercase, remove the spaces by converting each word in the string to an element of an array, and put it back together without spaces
//   const newString = string.toLowerCase().split(" ").join("");
//   // const newString = string.toLowerCase().replace(/[^\w]/g, ''); \W means "non-word" (Regular expression) this line does the same as the top line

//   //Then separate the letters of the string to put their order in reverse and after put it back together
//   const reverseString = newString.split("").reverse().join("");

//   //Finally returns the comparison of the string that entered and the string in reverse, if they match it returns true, if it is different it returns false
//   return reverseString == newString;
// }

// console.log("=> EXERCISE 1")
// console.log(isPalindrome("anilina")) // expected output =>  true
// console.log(isPalindrome("Amo la paloma")) // expected output =>  true
// console.log(isPalindrome("Hola mundo")) // expected output =>  false
// console.log("")

// // EXERCISE 2
// //Write a function called "removeDuplicates" that takes an array of numbers as an argument and returns a new array with no duplicate elements.

// function deleteDuplicates(array) {
//   //Creates a new array to save the unique elements
//   const newArray = [];

//   //Then loops through the input array and checks if each element already exists in newArray, if the element doesn't exist it adds it to newArray
//   for (let i = 0; i < array.length; i++) {
//     if (!newArray.includes(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   //Finally returns the newArray without duplicates
//   return newArray;
// }

// console.log("=> EXERCISE 2")
// console.log(deleteDuplicates([1, 2, 3, 2, 4, 3, 5])) // expected output => [1, 2, 3, 4, 5]
// console.log(deleteDuplicates([5, 5, 6, 6, 7, 7, 7])) // expected output => [5, 6, 7]
// console.log("")

// // EXERCISE 3
// //Write a function called "getAverage" that takes an array of numbers as an argument and returns the average of those numbers.

// function getAverage(array){
//     let sum = 0;
//     array.forEach(element => {
//         sum = sum + element
//     });
//     return  sum / array.length;
// }

// console.log("=> EXERCISE 3")
// console.log(getAverage([1, 2, 3, 4, 5])) // => 3
// console.log(getAverage([10, 20, 30, 40, 50]))// => 30
// console.log("")


// // EXERCISE 4
// // Write a function called "reverseString" that takes a string as an argument and returns a new string with the characters in reverse order.

// function reverseString(string) {
//     return string.split('').reverse().join('');
// }

// console.log("=> EXERCISE 4")
// console.log(reverseString("Hola mundo")) // => "odnum aloH"
// console.log(reverseString("JavaScript")) // => "tpircSavaJ"
// console.log("")