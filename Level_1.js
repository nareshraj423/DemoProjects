/*
Assignment Name - Json datastore and Javascript frontend
------------------------------------------------------------------------------------------------------------------------------------------------
Q)Problem Statement -
Imagine you are creating a JSON data store for a Ecommerce platform like flipkart.com or amazon.in!
------------------------------------------------------------------------------------------------------------------------------------------------
Tasks to be done:
    1. Create a JSON to show what fields you will choose and what type of data (string/object/array) would you want to store in those field.
    2. Create a javascript file containing following functions:
        1) Function to Read data from JSON file and display it in console.
        2) Function to find a particular entry from JSON store using a name or id (whatever
        field you want)
        3) Function to find a particular entry by its position/index (index in the array).
------------------------------------------------------------------------------------------------------------------------------------------------
Points remember: (free to use any library)

    1) Quality of JavaScript code - Your application's Javascript code should be optimized to be readable with proper indentation and comments. It should be broken down into functions for better maintainability and it should not contain any logical bugs.
    
    2) Intuitive Thinking - You have thinking intuitively and think of all the possible data points to be stored in the JSON. The better your data store is, the more marks you get.
    
    3) Originality of code - Your code will be checked for plagiarism and if it's not original, it will be discarded with a negative skill score.
-------------------------------------------------------------------------------------------------------------------------------------------------

*/

// Two JSON datastores are defined.
var Mobile = [
	{
	"type" : "Mobile",	
	"brand" : "Samsung",
	"name" : "Samsung Note8",
	"id" : 1,
	"model" : {"version":"Note", "SIM": 1, "OS" : "Android"},
	"description" : "AMOLED 5inch Octa Core Dual Display",
	"price" : 100000,
	"color" : ["white", "black", "silver"],
	"stock" : 6	
	},
	{
	"type" : "Mobile",	
	"brand" : "Samsung",
	"name" : "Samsung Duo",
	"id": 2,
	"model" : {"version":"S8", "SIM": 2, "OS": "Android"},
	"description" : "AMOLED 4inch Octa Core Dual Display",
	"price" : 10000,
	"color" : ["grey", "gold", "black"],
	"stock" : 4	
	}
];
var Laptop = {
	"Intel" : 
	{
		"type" : "Laptop",
		"brand" : "Dell",
		"name" : "Dell Note",
		"id" : 1,
		"model" : {"version" : "D8", "RAM" : "4GB", "OS" : "Intel"},
		"description" : "AMOLED 17inch Octa Core Dual Display",
		"price" : 90000,
		"color" : ["gold", "brown", "grey"],
		"stock" : 4
	},
	"AMD" : 
	{
		
		"type" : "Laptop",
		"brand" : "HP",
		"name" : "HP Note",
		"id" : 2,
		"model" : {"version" : "HP8", "RAM" : "4GB", "OS" : "AMD"},
		"description" : "AMOLED 22inch Octa Core Dual Display",
		"price" : 100000,
		"color" : ["white", "blue", "red"],
		"stock" : 6
	}
}

var display_Data = function () {
	let myObj;
	let data = prompt('Enter Product Store from the following: Mobile, Laptop');
	
	if (data === null || data === "") {
		alert("Not a valid datastore");
	} else {
		
		//Assign myObj to respective JSON data based on user input.
		(data.toLowerCase() == 'mobile') ? (myObj = Mobile) : (myObj = Laptop);
		
		//Iterate to get all the entries in the datastore selected.
		for (let key in myObj) {
			console.log(myObj[key]);
		}
		let result = "Results are displayed in Browser's Console Window: RightClick -> Inspect Element";
		document.getElementById('demo').innerHTML = result;
	}
}

var search_UsingID = function () {
	let myObj;
	let data = prompt('Enter Product Store from the following: Mobile, Laptop');
	let id_Num = prompt('Enter Product ID');
	
	if (data === null || data === "") {
		alert("Not a valid datastore");
	} else {
		
		//Assign myObj to respective JSON datastore based on user input.
		(data.toLowerCase() == 'mobile') ? (myObj = Mobile) : (myObj = Laptop); 
		
		//Iterate to get the name of the particular entry using product ID.
		for(let key in myObj) {
			if (myObj[key].id == id_Num) {
				let result = "The name of Product with ID : " + id_Num + ' is ' + myObj[key].name + '<br>';
				document.getElementById('demo').innerHTML = result;
			}
		}
	}
}

var search_UsingINDEX = function () {
	let myObj;
	let data = prompt('Enter Product Store from the following: Mobile, Laptop');		
	let indx_Num = prompt('Enter index of the array');
	
	if (data === null || data === "") {
		alert("Not a valid datastore");
	} else {
		
		//Assign myObj to respective JSON datastore based on user input
		(data.toLowerCase() == 'mobile') ? (myObj = Mobile) : (myObj = Laptop);
		
		//Iterate to get the particular entry using array index.
		for (let key in myObj) {
			
			length_Array = (myObj[key].color).length; // Define length of respective Array to be indexed.
			
			if (indx_Num !== null && indx_Num != "" && indx_Num <= length_Array-1) {
				let result = "The value of index [" + indx_Num + ']:' + myObj[key].color[indx_Num] + '<br>';
				document.getElementById('demo').innerHTML = result;
			}
		}
	}
}