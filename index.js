import inquirer from "inquirer";
let Converstion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1,
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "form",
        choices: ["PKR", "USD", "GBP"],
        message: "select your Currency :"
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "USD", "GBP"],
        message: "select your conservtion Currency :"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount :"
    },
]);
const { form, To, amount } = answer;
if (form && To && amount) {
    let result = Converstion[form][To] * amount;
    console.log(`your converstion form ${form} To ${To} is ${result}`);
}
else {
    console.log("invalid inputs");
}
