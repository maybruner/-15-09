
const splitter = "\n\n*****************************************************************************************\n"

//---------------------------------------------- Question 1 ----------------------------------------------//
// Create an object called "person" with properties "name" and "age".
// Write a function "getPersonInfo" that updates the DOM with the person's information when a button is clicked.

const person = {
    name: "John",
    age: 30
};
 getPersonInfo = function() {
document.getElementById("personInfo");
personInfo.innerHTML=`Name: ${person.name}, Age: ${person.age}`;
};  
    // Get a DOM element and set the value to display the person's info.


//---------------------------------------------- Question 2 ----------------------------------------------//
// Create an object called "car" with properties "make", "model", and "year".
// Add an input field for the year and a button to update the "year" property of the car object.

var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

var updateCarYear = function() {
    // Get the input value and update the car object
    let newYear = document.getElementById("yearInput").value; 

    if(newYear && !isNaN(newYear) && newYear>1) 
        {car.year = newYear;
        document.getElementById("carinfo").innerHTML = 
    `Make: ${car.make}| Model: ${car.model}| Year: ${car.year}`}

 else {
    alert("Please enter a valid year!");
        
};}

//---------------------------------------------- Question 3 ----------------------------------------------//
// Create an object called "product" with properties "name", "price", and "quantity".
// Write a function "updateQuantity" to update the product's quantity using input from a text field.

var product = {
    name: "Laptop",
    price: 1500,
    quantity: 10
};

var updateQuantity = function() {
    let newquantity = document.getElementById("QuantityInput").value; 
// Update the product quantity using input.value
    if( newquantity && !isNaN(newquantity)) 
        {product.quantity = newquantity;
        document.getElementById("productInfo").innerHTML = 
    `Name: ${product.name}| Price: ${product.price}| Quantity: ${product.quantity}`}

 else {
    alert("Please enter a valid quantity!");
        
};}
    


//---------------------------------------------- Question 4 ----------------------------------------------//
// Create an object called "student" with properties "name" and "grade".
// Write a function "updateGrade" that will update the student's grade using an input field.

var student = {
    name: "Alice",
    grade: 90
};

var updateGrade = function() {
    // Update the student's grade using input.value
    let newgrade = document.getElementById("GradeInput").value;
    if(newgrade && !isNaN(newgrade)) {
        student.grade = newgrade;
        document.getElementById("studentinfo").innerHTML = 
        `Name: ${student.name}| Grade: ${student.grade}`}
        
    else {alert("Please enter a valid grade!")}
    };

//---------------------------------------------- Question 5 ----------------------------------------------//
// Create an object called "movie" with properties "title", "rating".
// Write a function "updateRating" to change the rating of the movie when a user enters a new rating in an input.

var movie = {
    title: "Inception",
    rating: 8.8
};

var updateRating = function() {
    // Update movie rating using input.value
    let newrate = document.getElementById("RateInput").value;
    if(newrate && !isNaN(newrate)) {
        movie.rating = newrate;
        document.getElementById("movieinfo").innerHTML = 
        `Title: ${movie.title}| rating: ${movie.rating}`}
        
    else {alert("Please enter a valid rate!")}
    };



//---------------------------------------------- Question 6 ----------------------------------------------//
// Create an object called "game" with properties "name", "score".
// Write a function "updateScore" to change the score when the user enters a new score in an input field.

var game = {
    name: "Chess",
    score: 100
};

var updateScore = function() {
    // Update the game's score using input.value
    let newscore = document.getElementById("scoreInput").value;
    if(newscore && !isNaN(newscore)) {
        game.score = newscore;
        document.getElementById("gameinfo").innerHTML = 
        `Name: ${game.name}| Score: ${game.score}`}
        
    else {alert("Please enter a valid score!")}
};

//---------------------------------------------- Question 7 ----------------------------------------------//
// Create an object called "pet" with properties "name" and "type".
// Write a function "renamePet" that will update the pet's name using an input field and a button.

var pet = {
    name: "Buddy",
    type: "Dog"
};

var renamePet = function() {
    // Update the pet's name using input.value
    let petname = document.getElementById("nameinput").value;
    if(typeof petname === 'string' && isNaN(petname)) {
        pet.name = petname;
        document.getElementById("petInfo").innerHTML = 
        `Name: ${pet.name}| Type: ${pet.type}`}
        
    else {alert("Please enter a valid name!")}
};


//---------------------------------------------- Question 8 ----------------------------------------------//
// Create an object called "phone" with properties "brand", "model", and "price".
// Write a function "updatePrice" that updates the phone's price using an input field.

var phone = {
    brand: "Apple",
    model: "iPhone 12",
    price: 999
};

var updatePrice = function() {
    // Update the phone's price using input.value
    let newprice = document.getElementById("priceInput").value;
    if(newprice && !isNaN(newprice)) {
        phone.price = newprice;
        document.getElementById("phoneinfo").innerHTML = 
        `Brand: ${phone.brand}| Model: ${phone.model}| Price: ${phone.price}$`}
        
    else {alert("Please enter a valid price!")}
};



//---------------------------------------------- Question 9 ----------------------------------------------//
// Create an object called "laptop" with properties "brand", "ram", and "storage".
// Write a function "updateStorage" to update the laptop's storage property using an input field.
// Add a "turbo" function to the laptop object, which will return a number of the turbo speed
// Which will be calculated by laptop.ram * laptop.storage
// Example: ( laptop.ram is equal to 16 ) * ( laptop.storage is equal to 512 )

var laptop = {
    brand: "Dell",
    ram: 16,
    storage: 512,
    turbo: function () {
        return this.ram * this.storage;}
};
var updateStorage = function() {
    // Update the laptop storage using input.value
    let storagenew = document.getElementById("storageInput").value;
    if(storagenew && !isNaN(storagenew)) {
       laptop.storage = parseInt(storagenew, 10);
    
    document.getElementById("Laptopinfo").innerHTML = 
`Brand: ${laptop.brand}GB| Ram: ${laptop.ram}GB| Storage: ${laptop.storage}GB`;

} else {
    alert("Please enter a valid number!");
    }
};

function Showturbospeed() {
    let turbospeed = laptop.turbo()
    document.getElementById("turbospeed").innerHTML= 
    `Turbo speed: ${turbospeed} (Calculated by ram * storage)`;
};
//---------------------------------------------- Question 10 ----------------------------------------------//
// Create an object called "book" with properties "title", "author", and "pages".
// Write a function "updatePages" to change the number of pages in the book using an input field.

var book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 350
};

var updatePages = function() {
    let newpagesamount = document.getElementById ("pagesinput").value;
    if(newpagesamount && !isNaN(newpagesamount)){
        book.pages = newpagesamount;
        document.getElementById("bookinfo").innerHTML = 
        `Title: "${book.title}" | Author: "${book.author}" | Pages: ${book.pages}`
    }
    else { alert("Please enter a valid pages amount!")}
}
