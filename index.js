//First attempt without sorting/removing impossible elements
//Not very optomized, worst case scenario is unlikely for random arrays, but would take a very long time 
function hasTargetSum(array, target) {
  // Write your algorithm here
    for(let n = 0; n < array.length; n++) {
      const num = array[0]
      array.shift(0, 1) 
      if(!!array.find((number) => number === (target-num))) {
        return true
      }   
    }
  return false
}


const createRandomTest = (arrayLength) => {
  const target = Math.floor(Math.random() * 100)
  const newArray = []
  for(let n = 0; n < arrayLength; n++) {
    newArray.push(Math.floor(Math.random() * 100))
  }

  console.log(hasTargetSum(newArray, target), newArray, target)
} 

/* 
  Write the Big O time complexity of your function here
  O(n!) If you add each element to every other element of the array, the time complexity increases by nC2 where repeat combos are removed which can be represented by n!/2! > N!/2 removing all constants, we are left with a time complexity of n!
  It's possible to improve this slightly by removing any numbers that are over the desired value as no matter, assuming no negative numbers, they will never equal a lower number with simple addition

  what if I subtract a value from the target and do a search to see if that value exists within the array? will implement this part first and compare to later versions using sorted arrays. will also make a function to generate arrays of n size to test for very large arrays.
  Is it faster if I also sort the array and check starting from the [n+1] value? or would a sort take longer than just searching through the array for every number?
  If I sort before removing number larger than the target I can remove all values for (n, array.length). Would that be faster as well?
  what would the time complexity be in either case?

  JS does some weird stuff with sort e.g. when sorting the array [3, 8, 12, 4, 11, 7] using node, the result is [11, 12, 3, 4, 7, 8] instead of being ascending/descending probably has to do with how it converts each number into a string and compares the UTF-16 values for each number.

  found out a bit more about sorting algorithms and introsort seems to be a good algorithm for quickly sorting an array, in place, using as little space as possible. Using https://www.techiedelight.com/introsort-algorithm/ as reference for how I might build it in JS

  How can I optimize for space? current space complexity is O(n)
*/

/* 
  Add your pseudocode here
  sorts the array using the built in method
  removes any element larger than the target
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
