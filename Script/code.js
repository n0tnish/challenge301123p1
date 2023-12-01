const askForNumbers = new Promise((resolve, reject) => {
    const number1 = prompt("Enter number 1:");
    const number2 = prompt("Enter number 2:");
  
    
    if (!isNaN(number1) && !isNaN(number2)) {
      const sum = Number(number1) + Number(number2);
      resolve(`${number1} + ${number2} = ${sum}`);
    } else if (isNaN(number1) && isNaN(number2)) {
      reject("Both number 1 and number 2 are not numbers.");
    } else if (isNaN(number1) && !isNaN(number2)) {
      reject(`Number 1 (${number1}) is not a number.`);
    } else if (!isNaN(number1) && isNaN(number2)) {
      reject(`Number 2 (${number2}) is not a number.`);
    }
  });
  
  askForNumbers
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  