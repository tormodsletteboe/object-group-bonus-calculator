// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
 
  let bonusResults ={
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: employee.annualSalary,
    totalBonus: 0
  };
if (employee.reviewRating === 2) {
  bonusResults.totalBonus = employee.annualSalary * 0;
  bonusResults.bonusPercentage = 0;

} else if( employee.reviewRating ===3){
  bonusResults.totalBonus = employee.annualSalary * .04;
  bonusResults.bonusPercentage = .04;

} else if (employee.reviewRating ===4){
  bonusResults.totalBonus = employee.annualSalary * .06;
  bonusResults.bonusPercentage = .06;

} else if (employee.reviewRating === 5){
  bonusResults.totalBonus = employee.annualSalary * .10;
  bonusResults.bonusPercentage = .10;
}


 bonusResults.totalCompensation = bonusResults.totalBonus + parseInt(employee.annualSalary);
 console.log(bonusResults.totalCompensation);
 console.log(bonusResults.totalBonus);
 console.log(bonusResults.bonusPercentage);


if (employee.employeeNumber.length > 4){
  console.log('Hello');
  bonusResults.totalBonus = bonusResults.totalCompensation * .05; 
  bonusResults.totalCompensation += bonusResults.totalBonus;
  bonusResults.bonusPercentage += .05;

  console.log(bonusResults.bonusPercentage);
  console.log(bonusResults.totalCompensation);
}
if (bonusResults.totalCompensation > 65000){
  bonusResults.totalBonus = bonusResults.totalBonus - (bonusResults.totalBonus * .01);
  bonusResults.bonusPercentage -= .01;
  console.log(bonusResults.bonusPercentage);
  console.log(bonusResults.totalBonus); 

}
if(bonusResults.bonusPercentage>.13){
bonusResults.totalBonus = employee.annualSalary * .13;
bonusResults.bonusPercentage = .13;
bonusResults.totalCompensation = employee.annualSalary + bonusResults.totalBonus;

}


 return bonusResults;
  // return new object with bonus results

}
//calculateIndividualEmployeeBonus(employees[0]);
console.log(calculateIndividualEmployeeBonus(employees[3]));