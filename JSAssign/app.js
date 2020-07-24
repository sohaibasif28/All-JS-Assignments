// Chapter 1 


alert("Hello World"); /* Task1 */
alert("Error! Please Enter A valid Password");  /* Task2 */

alert("Welcome TO JS Land... \n Happy Coding!") /* Task3 */

alert("Welcome to JS land!"); /* Task4
 */ alert("Happy Coding"); 


// Chapter 2

var userName;

var myName ="Sohaib Asif";

var message = "Hello World";

alert(message);

var name="Sohaib";
var age = "21";
var profession = "Web Developer";


alert(name);
alert(age);
alert(Profession);

alert(" Pizza \n Pizz \n Piz \n Pi \n P")


var email = "gmail.com";
var fullEmail = "sohaibasif@" + email;

alert(fullEmail);


var book = "A smarter way to learn JavaScript";

alert("I am triny to learn "+book);

document.write("Yeah I can write through javascript in HTML");

var end="“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”";

alert(end);


// Chapter 3

var age = 23;
alert("my age is "+age+" years old");

var visited = 5;

alert("you have visited "+visited+" times");

typeof(visited);

var birthYear = 1990;

document.write("my birth year is "+birthYear+ "\nThe date type of declared varible is "+typeof(birthYear));


var visitorName="Sohaib";
var productTitle ="Shirt";
var prodcutQuantity=2;

alert(""+visitorName+" Ordered "+prodcutQuantity+" "+productTitle+" on xyzclothing.com");


// Chapter 4

var x,y,z;

/* legal variables declaration */
// var x;
// var fullName;
// var full_Name;
// var $money;
// var $$$;



/* Illegal variables declaration  */


// var product cost;
// var money_%full;
// var plus-name;
// var my+name;
// var declaration/of;



document.write("Variables names can only contain , numbers, $ and _. For Example : $my_1stVariable <br>");
document.write("<br>Variables must being with a letter, $ or _. For Example $name, _name or name <br>");
document.write ("Vairable name are case sensitive <br>");
document.write("Vairable names should not be JS keywords <br>");

// Chapter 5

var a = +prompt ("Enter the value of a");
var b = +prompt ("Enter the value of B");

var c = a+b;

document.write("Result of addition is "+c);


var d = a-b;

document.write("Result of substraction is "+d);

var e = a/b;

document.write ("result of division is "+e);

var f = a*b;

document.write("Result of multiplication is "+e);

var g = a%b;

document.write ("Result of modulus is "+g);


var a;

document.write ("The value of a is <br>"+a);

 a = 5;

document.write ("The value of a after declaration is "+a+ "<br>");

a++;

document.write("the value of a after increament is "+a+"<br>");

a = a + 7;

document.write ("The value of a after addition of 7 is "+a+"<br>");

a--;

document.write ("The value of a after decreament is "+a+"<br>");

a = a%3;

document.write ("The reminder of a after dividing by 3 is "+a+"<br>");



/* task 4 */

var ticket = 600;
var qty = 5;
var total = ticket*5;

document.write("Total cost of buying 5 tickets is "+total);

/* multiplication of table */


var a=2;
var total;
for (var i = 1; i<=10 ; i++){

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");

}

/*temprature conversion c to f */


var c = 25;

var f = (c*9/5) + 32;

document.write("Converted from C to F temprature is "+f);



/*temprature conversion f to c */

var f = 25;

var c = (f-32) * 5/9;

document.write("Converted from C to F temprature is "+c);

/*shopping cart */

var item1 = 650;
var item2 = 100;

var qt = item1*3;

var qt2 = item2 * 7;

var shipping = 100;

var total = shipping + qt + qt2;

document.write ("total cost of your order is "+total);


/* Percentage calculator */
var totalMarks = 1150;
var obtainedMarks = 850;

var percentage = (obtainedMarks/totalMarks)*100

document.write("The percentage is "+percentage);

/* Currency Calculator */

var dollars = 10;
var riyal = 28;

var currencyToPkr = dollars*104.80+riyal*25;

document.write(dollars+" dollar into pkr is "+currencyToPkr);

/*Math Expression in single line */

var a = 5 + 5 * 10 / 2;

document.write(a);

/* Age Calculator */

var currentYear=2020;
var birthYear = 1997;
var totalAge = currentYear - birthYear;

document.write("Your Current Age is "+totalAge);


/* Area of Circle */

var radius = 20;

const PI = 3.142;

var cOfCircle = 2*PI*radius;

document.write("The Circumference of Circle is "+cOfCircle);

var areaOfCircle = PI*radius*radius;


document.write("The Area of Circle is "+areaOfCircle);

/* Lifetime Supply Calculator */

var salanty = 15;
var maximumAge = 40;
var perDay = 3

var need = 3*25;

document.write("You will need "+need+ " salanties to last 40 years");



// Chapter 6-9

/*Arithematic Operations */

var a = 10;

document.write ("The value of A  is "+a+"<br>");

++a;


document.write("The value of ++a is "+a+"<br>");

document.write("now current value of a is "+a+"<br>");

document.write("The value of a is "+a+"<br>")

a++;
document.write("The value of a++ is "+a+"<br>");


a--;

document.write("The value of --a is "+a+"<br>");

document.write("now current value of a is "+a+"<br>");

document.write("The value of a is "+a+"<br>")

a--;
document.write("The value of a-- is "+a+"<br>");



/* Explanation of Arithematic Opeartions */

var a = 2, b = 1; var result = --a - --b + ++b + b--;
                               

/* Explanation  1  -  0   +  1  + 1    */

document.write(""+result);


/* Greeting User */

var name = prompt ("Enter your name");

alert("Welcome "+name+"!");

/* Default table 5 otherwise other tables*/

var a=+prompt("Enter the table for multiplication");



var total;
for (var i = 1; i<=10 ; i++){

    if (a>5 || a<5 ){

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");
}

else {

a=5;    

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");
}        
}


/* Percetage Calculator */

var total = 100;
var englishMarks=54;


var mathsMarks=54;
var urduMarks = 48;


var wholeTotal = total*3;

var obtainedTotal = englishMarks + mathsMarks + urduMarks;


var percentage = (obtainedTotal  / wholeTotal) * 100;

document.write ("The percentage of yours is "+percentage); 




// Chapter 9-11


/* Welcoming on specific city */

var city = prompt ("Enter the name of the city ");

if (city === "Karachi")
{
    
    alert("Welcome To The City of lights");
}

/* Welcoming On The Basis Of Gender */

var gender = prompt ("Enter your gender");

if (gender==="male")
{
        alert("Welcome Sir");
}
        if(gender==="female"){

            alert("Welcome Madam");
        }

        /* Traffic Light Controller */

        var color = prompt ("Enter color of current Traffic");

if (color==="red")
{
                alert("must Stop");
}

else if (color==="yellow"){
                alert("Ready To Move")

}
else if (color==="green")
{
            alert("Ready to move");
}

/* Refuel of car application */

var fuel = prompt ("Enter the amount of the fuel");

if (fuel<0.25){
                alert("Please refuel");
}

/* Checking If Conditions Are True */

document.write ("part a is true");
document.write ("part b wont run because not true");
document.write ("Part c Condition 2 is true");
document.write ("part d The Cost is equal in part d");
document.write ("part e is true")
document.write ("part f is car is smaller than cat");


/* Mark Sheet */

var totalMarks = 300;
var marksObtained = +prompt("Enter the marks Obtained");
var percentage = (marksObtained/totalMarks) * 100


if (percentage>=80)
{
        document.write("You have A+ grade , Excellent Marks!");
}

else if (percentage>=70)
{
        document.write("You have A grade , Good!");
}

else if (percentage>=60)
{
        document.write("B Grade , You need to improve");

}
else if (percentage<60)
{
        document.write ("Fail, Sorry");
}

/* Guessing the number */

var guessNumber = prompt ("Enter the secret number range 1-10");

var guessIt = prompt ("Enter the secret number range to guess it 1-10");

if (guessNumber===guessIt)
{
            alert("Bingo, Correct Answer!");
}

else if (guessNumber-guessIt===1)
{
        alert("You were almost close!");
}


/* checking if the number is divisible by 3 */

var  b = prompt ("Enter any number");

if (b%3==0){
                alert("The number is divisble by 3");
}
               else{
                    alert ("The number is not divisible by 3");               
               }


/* checking even odd */

var  b = prompt ("Enter any number");

if (b%2==0){
                alert("The number even Number");
}
               else{
                    alert ("The number odd number");               
               }

               /* weather calculator messages */

               var t = prompt ("Enter temprature");

if (t>40)
{
        prompt ("It is too hot outside.")
}
else if (t>30)
{
        prompt ("The Weather today is Normal.")
}

else if (t>20)
{
        prompt ("Today’s Weather is cool.")
}
else if (t>10)
{
        prompt ("Today’s weather is so Cool")
}




/* Calculator */

var firstNumber = prompt ("Enter the first Number");
var secondNumber = prompt ("Enter the second Number");
var sign = prompt ("Enter the operator"); 

if (sign === "+")
{
        var total = firstNumber+secondNumber;
        document.write("<br>")
        document.write("The addition of 2 numbers is "+total);
}


else if (sign === "-")
{
        var total = firstNumber-secondNumber;
        document.write("<br>")
        document.write("The Subtraction of 2 numbers is "+total);
}

else if (sign === "*")
{
        var total = firstNumber*secondNumber;
        document.write("<br>")
        document.write("The Multiplication of 2 numbers is "+total);
}

else if (sign === "/")
{
        var total = firstNumber/secondNumber;
        document.write("<br>")
        document.write("The Divsion of 2 numbers is "+total);
}


else if (sign === "%")
{
        var total = firstNumber*secondNumber;
        document.write("<br>")
        document.write("The Modulus of 2 numbers is "+total);
}


// Chapter 12-13




/* Checking lowerCase or upperCase or type of Variable */


var a = prompt ("enter any kind of variable");

if (a>="A" && a<="Z")
{
            document.write("The letter is Capital");

}

else if (a>="a" && a<="z")
{
            document.write("The letter is lowerCase");
                     

}

else (
        document.write("The variable is not string")
)

/* Comparring two numbers */

var a = +prompt ("Enter the value of A");
var B = +prompt ("Enter the value of B");

if (a===b)
{
            document.write ("The two numbers are equal <br>");
}

else if (a=b){
                document.write ("a is greater than b");
}

else if (b>a){
                document.write ("b is greater than a");
}

/* Checking if the number is zero , positive or negative */

var a = +prompt ("enter the number");

if (a<0)
{
            document.write ("The number is in negative");
}
else if (a===0)
{   
        document.write ("The number is equal to zero");
}
else {
            document.write ("The number is positive");
}


/* Guessing if the character is vowel or not */

var ch = prompt ("Enter any character");

if (ch==="a")
{
            document.write("The character is vowel");
}

else if (ch==="e")
{
            document.write("The character is vowel");
}

else if (ch==="i")
{
            document.write("The character is vowel");
}

else if (ch==="o")
{
            document.write("The character is vowel");
}

else if (ch==="u")
{
            document.write("The character is vowel");
}

else {
            document.write ("The character is not vowel");
            }


            /* Checking if the password is same or not */

            var password = prompt ("Enter your passowrd");

var verifyPassword = prompt ("Re-enter your passowrd");

if (password===verifyPassword)
{
            alert("The password is character");
}
else {
            alert("The password is not character, re-enter please!");
}

/* solution for 6th question fixed */

var greeting; 
var hour = 13; 
if (hour <= 13)
 { 


 greeting = "Good day"; 
 document.write(greeting)
 }

 else{

  greeting = "Good evening"; 

}

/* Greeting According to the time */

var time = +prompt ("Enter time in whole numbers 24 hours");

if (time>=00 && time<12){
                document.write("Good Morning!");
}



else if (time>=12 && time<17){
                document.write("Good Evening!");
}

else if (time>=12 && time<17){
                document.write("Good Afternoon!");
}

else if (time>=17 && time<21){
                document.write("Good Evening!");
}

else {
            document.write("Good Night!");
}



//  Chapter 14-16

 

var list = [];
var arrayB = new Array();

list = ["Sohaib","Saqib","Huzaifa"];

var numbers = [1,3,4,5,6];

var bolArr = [true,false];

var mixedArray = ["Sohaib",0.46,true,"saqib",5];

var qualifications = ["school","college","gradutaion","job"];

for (var i = 0 ; i<4;i++)
{
document.write(qualification[i]+"<br>");
}



/* qualifcations printing in array */

var qualifications = ["SSC","HSC","BCS","BS","B.COM","MS","M.PHIL","PHD"];

var b =5 ;

for (var i = 0 ; i<8;i++)
{
document.write(i+(1)+" "+qualifications[i]+ "<br>");
}


/* calculating scores through array */

var names = ["Azhar","Ali","Zeeshan"];

var marks =  [320,230,480];

for (var i = 0 ; i<3;i++)
{
     var percentage = [(marks[i]/500)*100,(marks[i]/500)*100,(marks[i]/500)*100];
}

for (var i=0;i<3;i++)
{
                  
          document.write("Score of "+names[i]+ " is " +marks[i]+ ". Percentage: "+percentage[i]+ "<br>" );
     
    
      
}


/* colors from array */

var colors = ["yellow","green","blue"];

var askColor = prompt ("what color do you want to add in the beginning");

 colors.unshift(askColor);


var addAtEnd = prompt ("What color do you want to insert at the end of Array");

colors.push(addAtEnd);


colors.push("black","dark Blue");


colors.shift();

for (var i=0;i<colors.length;i++)
{
   
        document.write(" "+colors[i]+ "<br>");
}


/* cities list */

var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

city.slice(2,4);



/* Joining Arrays */

var arr = ["This", "is", "my", "cat"];

var newArr = arr.join();

document.write(newArr);



// Chapter 17-20

for (var i =1 ; i<11;i++)
{
    document.write(i+ "<br>");
}

/* table of length */

var a=+prompt("enter the table");

var length= +prompt("Enter the length of the table");


var total;
for (var i = 1; i<=length ; i++){

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");

}


/* frutis of array through loop */
var fruits = ["apple","banana","mango", "orange", "strawberry"];

/*   counting */

for (var i=0;i<5;i++)
{
            document.write(fruits[i]+"<br>");
}


/*  backward counting */

for (var i =10 ; i>=1;i--)
{
    document.write(i+ "<br>");
}

/*  even counting */



for (var i=1 ; i<=20;i++)
{

if (i%2==0)
{   
 document.write(i+ "<br>");

}


   
}

/*  Odd counting */



for (var i=1 ; i<=20;i++)
{

if (i%2==1)
{   
 document.write(i+ "<br>");

}


   
}

/* series counting */


for (var i=1 ; i<=20;i++)
{

if (i%2==0)
{   
 document.write(i+ "k<br>");

}


   
}

/* finding element in the array */
var A = ["cake", "apple Pie" ,"cookie", "chips", "patties"];


var search = prompt ("Enter the element you want to search")

for (var i = 0 ; i<5;i++)
{


if (A[i]===search)
{
            document.write("The element is in the array");
            break;
}
else{
                document.write("Not in the array");
                break;
}
}

/* program to print multiple of 5 */

for (var i = 5 ; i<=100 ; i++)
{
                        if (i%5==0)
                        {
                                    document.write(i+" ");
                        }
}

// Chapter 21-25


/* Task 1 */
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

var fullName = firstName + lastName;

alert("Welcome "+fullName+"!");

/* Task 2 */

var favoriteMobile = prompt("Enter your favorite mobile model full");

document.write(favoriteMobile.length);

/* Task 3 */

var country= "Pakistani";

document.write(country.indexOf("n"));

/* Task 4 */

var greet= "Hello World";

    
        document.write(greet.lastIndexOf("l"));


/* Task 5 */

var country= "Pakistani";

document.write("The Character At index 3: "+country.charAt(3));


/* task 6 */

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");


document.write(""+firstName.concat(lastName));


/*task 7 */

var city="Hyder"

document.write("City : \n"+city+"<br>");

var city="Islamabad";

document.write("\nAFter replacmenet :"+city);


/* task 8 */

var message = "Ali and Sami are best friends. They play cricket and football together.";


for (var i = 0;i<=message.length;i++)
{
    if (message.indexOf("and"))
    {
       var message = "Ali and Sami are best friends. They play cricket & football together.";
       document.write(message);
       break;
    }
}


/* task 9 */

var number = 472;


document.write("value : "+number+"<br>");
document.write("type of: "+typeof(number)+"<br>");

number = number.toString();




document.write("value : "+number+"<br>");
document.write("type of: "+typeof(number)+"<br>");


/*Task 10 */

var name = prompt("Enter any input");

 input = name.toUpperCase();

document.write(input);

/* task 11 */

var name = "javascript"
var firstChar = name.slice(0,1);
firstChar=firstChar.toUpperCase();

var rest=name.slice(1,name.length);

var titleCase =firstChar+rest;

document.write(titleCase);

/* task 12 */

var num = 35.36;
num=num.toString();

var remove = num.slice(0,2);
var remove1 = num.slice(3,num.length);

num = remove + remove1;


document.write(num);


/* task 13 */

var text = prompt("Enter username")


for (var i = 0; i < text.length; i++) {
 if (text.charAt(i) === "!" || text.charAt(i) === "$" || text.charAt(i) === "@" || text.charAt(i) === "#") {
 alert("PLease enter valid username!");

 break;
 }
 }

 /* task 14 */

 var A = ["cake", "Apple Pie" ,"Cookie", "Chips", "Patties"];


var search = prompt ("Enter the element you want to search")





if (A.indexOf(search) !== -1)
{
       document.write("yes "+search+" is available at index "+A.indexOf(search))
       
}
else{
        document.write("We are sorry "+search+" is not available in our bakery")
}


 /* task 15 */

 

var number = [0,1,2,3,4,5,6,7,8,9];
var letterNumber = /^[0-9a-zA-Z]+$/;
var password = prompt ("Enter your password");

for (var i = 0 ; i<=number.length;i++)
{



 if (password.charAt(0) !== number[i] && password.length>=6 && password.match(letterNumber))
{
           alert("Your Password is correct");
           break;
}
else{
           alert("Enter your password again");
           break;
}
}

/* task 16 */

var university = "University Of Karachi";

for (var i = 0 ; i <=university.length;i++)
{
    document.write(university[i]+"<br>");  
}
    

    /* task 17 */
    var input = prompt("Enter country name");

    input = input.charAt(input.length-1);
    
    document.write(""+input);

    /* task 18 */

    var str = "the quick brown fox jumps over the lazy dog the";
    var count=0;
    
    
    var matchk= "the"
    
    for (var i =0;i<=str.match(matchk).length;i++)
    {
    if (str.match(matchk))
    {
        count++
    
    }
    }
      document.write(count);


    // Chapter 26-30

    /*task 1 */

 var number = 3.45214;
document.write("Number: "+number+"<br>");
document.write(" Round Off Value: "+Math.round(number)+"<br>");
document.write("Floor Value: "+Math.floor(number)+"<br>");
document.write("Ceil Number: "+Math.ceil(number)+"<br>");

/* task 2 */

var number = -2.673;

document.write("Number: "+number+"<br>");
document.write(" Round Off Value: "+Math.round(number)+"<br>");
document.write("Floor Value: "+Math.floor(number)+"<br>");
document.write("Ceil Number: "+Math.ceil(number)+"<br>");


/* task 3 */
var number = -4;

document.write("The absolute value of -4 is  "+Math.abs(number)+"<br>");


/* task 4 */




var roll = Math.floor(Math.random()*6+1);


document.write(roll);

/* Task 5 */

var head = prompt("Enter name of headuser");
var tail = prompt("Enter name of tailuser");

var toss = Math.floor(Math.random()*2);

if (toss===0)
{
        alert(head+"won the toss chose head");
}
else{
        alert(tail+"won the toss chose tail");
        
}


/* task 6 */


var number = Math.floor(Math.random()*100);

document.write("Random Number between 1 to hundred is : "+number);



/* task 7 */

var weight = prompt("Enter your weight");


if (weight>50 && weight<60)
{
document.write("your weight is "+weight);
}
else{
        alert("Enter your weight again");
}



/* task 8 */

var secret = Math.floor(Math.random()*10+1);



var guess=+prompt("Guess the secret number");

if (guess===secret)
{
        alert("You have guessed the correct number");
}
else{
            alert("You have guessed the wrong number");
}

document.write(""+secret);


// Chapter 31 - 34

/* task 1 */

var date = new Date();


document.write(date);

/* task 2 */

var d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

document.write("The current month is " + monthNames[d.getMonth()]);

/* task 3 */

var a = new Date();

var b = a.toString();

var c = b.slice(0,3);

document.write(""+c );


/* Task 4 */

var a = new Date();

var b = a.toString();

var c = b.slice(0,3);
var check ="Sun";

if (c===check)
{

document.write("It is Funday ");
}


/* task 5 */
var date = new Date();
var a = date.toString();
var b = a.slice(8,11);
var c = parseInt(b);
if (b<16)
{
    document.write("First fifteen days of the month");
            
}
else{
        document.write("Last fifteen days of the month ");
}

/* task 6 */


var date = new Date();
var c = date.getTime();
var d = parseInt(c);
var minutes = d/60000;

document.write("Milliseconds since 1st january 1970 are "+c+"<br>");
document.write("Minutes since 1st january 1970 are : "+minutes);




/* task 7 */
var date = new Date();
var c = date.getHours();
var time = parseInt(c);

if (c>=12){
        document.write("Its pm "+c);
}
else{
            document.write("Its am "+c);
}

/* task 8 */
var date = new Date(new Date().getFullYear(), 11, 31)
document.write(date);


/* task 9 */
var ramdan = new Date ("April 23,2020");
var currentDate = new Date();
var msRamdan = ramdan.getTime();
var msCurrentDate = currentDate.getTime();
var msDiff = msCurrentDate - msRamdan;
var daysPassed = Math.floor(msDiff / (1000*60*60*24));
document.write(daysPassed+" days have passed since Ramdan Started");

/* task 10 */
var date = new Date ("December 05,2015");
var currentDate = new Date();
var msCurr = currentDate.getTime();
var msDate = date.getTime();
var diff = msCurr - msDate;
var seconds = diff / 10000;
document.write("on Referance date "+date+" "+seconds+" seconds have passed since beginning of 2015");

/*task 11 */
var today = new Date();
today.setHours(today.getHours() - 1);
var currTime = new Date();
document.write("Current Date :"+currTime+"<br> 1 hour ago it was "+today);


/* task 12 */
var hundredYearsBack = new Date();
hundredYearsBack.setHours(hundredYearsBack.getFullYear() - 876000);
var currTime = new Date();
document.write("Current Date :"+currTime+"<br> 100 Years Back it was  "+hundredYearsBack);

/* task 13 */

var dob = new Date(prompt("Enter your date of birth, July 7,1997"));
var dobmili = dob.getTime();
var date = new Date();
var datemili = date.getTime();
var diff = datemili - dobmili;
var age = Math.floor(diff/(1000*60*60*24*30*12));
document.write(age);


/* task 14 */
var date = new Date();
var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var name = prompt ("Enter customer's name");
var currUnits = +prompt("Enter Units spend");
var unitCharges = +prompt("Enter charges per unit");
var lateCharge = 200;
var withinDate = unitCharges * currUnits
var afterDate = lateCharge + withinDate;
var dueDate = new Date();
dueDate.setHours(dueDate.getHours()+168);
var day = dueDate.toString();
var accDate = day.slice(8,11);
accDate = parseInt(accDate);
var accDueDate = day.slice(0,11);

document.write("Current Date : "+accDate+"<br>");


document.write("Customer's name: "+name+"<br>");
document.write("The current month is: "+months[date.getMonth()]+"<br>");
document.write("Number of Units: "+currUnits+"<br>");
document.write("Charges per unit: "+unitCharges+"<br>");
document.write("DueDate: "+accDueDate+" Amount:"+withinDate+"<br>");
document.write("Net payable amount after due date: "+afterDate);


// Chapter 35-38

/*task 1 */

function date()
{
        var date = new Date();
        document.write(date);

}

date();

/* task 2 */
function greet()
{
        var firstName = prompt("Enter your first name");
        var lastName = prompt ("Enter your last name");
        var fullName = firstName + lastName;
        document.write("Hello "+fullName+"!");
}
greet();

/* Task 3 */
function add()
{
        var firstNum = +prompt("Enter First number");
        var secondNum = +prompt("Enter second number");
        return firstNum+secondNum;
}

document.write(add());


/*task 4*/
function calculator(){
var firstNumber = prompt ("Enter the first Number");
 var secondNumber = prompt ("Enter the second Number");
 var sign = prompt ("Enter the operator"); 
 
 if (sign === "+")
 {
         var total = firstNumber+secondNumber;
         document.write("<br>")
         document.write("The addition of 2 numbers is "+total);
 }
 else if (sign === "-")
 {
         var total = firstNumber-secondNumber;
         document.write("<br>")
         document.write("The Subtraction of 2 numbers is "+total);
 }
 else if (sign === "*")
 {
         var total = firstNumber*secondNumber;
         document.write("<br>")
         document.write("The Multiplication of 2 numbers is "+total);
 }
 else if (sign === "/")
 {
         var total = firstNumber/secondNumber;
         document.write("<br>")
         document.write("The Divsion of 2 numbers is "+total);
 }
 else if (sign === "%")
 {
         var total = firstNumber*secondNumber;
         document.write("<br>")
         document.write("The Modulus of 2 numbers is "+total);
 }
 }
 calculator();

 /* task 5*/
 function square(number)
 {     
         var power = number*number
         document.write("square of given number is " +power);
 } 
 square(4);


 /*task 6 */

 var x= +prompt("Enter the value of x");
 function fact()
 {
 var fact = 1;
                    if (x<=0)
                    {
                                  document.write("Factorial is not possible")   
                    }
                    else
                    {
                                for (var i = x ;i >= 1; i--)
 {
                                     fact = fact*i;
 
                    }
                    document.write(fact);
 }
 }
 fact(x);
 
 /* task 7 */
 function range()
{
                                    var firstNum = +prompt("Enter value of first Number");
                                    var secondNum = +prompt("Enter value of second number");

                                 for (var i =firstNum ; i<=secondNum;i++){
                                                                     document.write(""+i+"<br>");
                                 }   
}
range();

/* task 8 */
function Hyp(b,p)
{
           
             var h = b*b + p*p;
                    return h;                

}
             function result()
            {                     
                           
                        
                             document.write(Hyp(b,p));
                          
            }
            var b = +prompt("Enter the value of base");
            var p = +prompt("Enter the value of perpendicular");
            result(b,p);

/* task 9 */
function area(w,h)
{
             var area = w*h;
             document.write(""+area);            
}
var  x = area(3,4);
document.write(x);
/* task 10 */
function palindrome()
{
var word = prompt("Enter any word");
var check="";
for (var i = word.length-1;i>=0;i--)
{
           check +=word.charAt(i);
}

if (check===word)
{
      document.write(word+ " is palindrome");
}
else{
            document.write(word+" is Not palindrome");
}
}
palindrome();

/* task 11*/
function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
         
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
     
        return splitStr.join(' '); 
     }
     
     document.write(titleCase("the quick brown fox"));

     /* task 12 */

     function longestWord(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        document.write(""+word);
    }
    
    longestWord("Web Development Tutorial");

    /* task 13 */

    function occur(){
    var temp = "JSResources.com";
var count = (temp.match(/is/g) || []).length;
document.write(count)
    }
    occur();

    /* task 14 */
    function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));












// Chapter 38-42

// Task 1
function power(a,b)
{
    
    var c = Math.pow(a,b);
    return c;
}

a = +prompt("Enter value of a");
b = +prompt ("Enter power you want to have on a ");
document.write(power(a,b));



// Task 2

function check_leapyear(){
    //define variables
    var year;

    //get the entered year from text box 
    year = +prompt("Enter year");

    //three conditions to find out the leap year
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
        alert(year+" is a leap year");  
    }
    else
    {
        alert(year+" is not a leap year");  
    }
}

check_leapyear();


// Task 3 

var a,b,c,s
function calculateS(){
          a  = +prompt("Enter value of a");
          b  = +prompt("Enter value of b");
           c  = +prompt("Enter value of c");
          s = (a+b+c);
            return s;
          return a;
          return b;
          return c;

}

function calculateArea(){
            calculateS();
            var area = s*(s-a)*(s-b)*(s-c);
            document.write(area);
}
calculateArea();


// task 4
var math,physics,science,percentage,average,total,obtainedMarks;

function percentages(){
             math = +prompt("Enter number of maths");
             physics = +prompt("Enter number of physics");
             science = +prompt("Enter number of science");
            total = 300;
            obtainedMarks = math+physics+science;
            percentage = (obtainedMarks/total)*100
            return (math,physics,science,obtainedMarks,percentage);
}
function averages()
{
            percentages();
            average = math+physics+science/3;
       
            document.write(physics); 
}

function mainFunction(){  
               
               averages();

            document.write("The percentage is "+percentage+"<br>");
            document.write(" The average marks are"+average);
}
            
mainFunction();

// Task 5
function indexOf(string, character) {
    var i=0;
    

    while(i < string.length){
        if(string[i] == character){  // yes? just return the index i
            return i
        }
        i++                          // no? increase i and move on to next loop iteration
    }
    return -1;                       // made it through the loop and without returning. This means no match was found.
}
document.write(indexOf("Mark Was Here", "M"))
document.write(indexOf("Mark Was Here", "W"))
document.write(indexOf("Mark Was Here", "k"))



// task 6

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  
  document.write(removeVowels("I have been feeling so lonely"));

  // task 7

  function indexOf(string) {
    var i=0;
    character =["ae", "ai", "ao", "au",
"ea", "ei", "eo", "eu",
"ia", "ie", "io", "iu",
"ua", "ue", "ui", "uo",
"ou", "iu", "eu", "ua", 
"ui", "oi", "ei", "ai",
"ie", "oe", "ie", "ae", 
"ua", "oa", "ia", "ea",]

    while(i < string.length){
        if(string[i] == character[i]){  
            return character[i];
        }
        i++                          
    }
    return -1;                
}
document.write(indexOf("Please red this application and give me gratuaity"))

// task 8

var kilo,meters,feet,inches,centimeters;

function kiloMeter(){
             kilo = +prompt("Enter distance between two cities in KM");
             return kilo;
          
}
function meter()
{
            meters = kilo*1000;
       
            document.write(meters+"<br>"); 
}
function feet(){
          
            feet = kilo*3280;
            document.write(feet+"<br>"); 
}
function inches(){
        
        inches = kilo*39370.1;
        document.write(inches+"<br>");
}
function centimeters(){
        
        centimeters = kilo*100000;
        document.write(centimeters+"<br>");
}
function main(){
    kiloMeter();
    centimeters();
inches();
feet();
meter();
}

main();


// task 9

var salary=1000;
var overTime=2;

var overTimeSalary = (salary+12*overTime);
document.write(overTimeSalary);


//  task 10 couldnt understand


//    chapter 43-48

//  task 1 2


function helloWorld(){
        alert("hello world");
}


 //   task 3
function remove(){ 
       var courses = document.getElementById("tbody");
       var row = document.getElementById("row");
       row.remove();
}


     
//  task 4
function changeImage(id,src)
 {
          var image = document.getElementById(id);
         image.src = src;
        }


                // task 5

        var number=0;


function increase(){
               
                var result = document.getElementById("result");
               ++number;
                result.value = number;
}

function decrease(){
                        var result = document.getElementById("result");
                        --number;
                        result.value = number;
}

// chapter 49-52

//  task 1

function signUp(){
        var firstName = document.getElementById("firstName");
        var paragraph = document.createElement("p");
        var textNode = document.createTextNode(firstName.value);
        var lastName = document.getElementById("lastName");
        var paragraph1 = document.createElement("span");
        fullName = "Full Name : " + firstName.value + lastName.value;
        var textNode1 = document.createTextNode(fullName);
        paragraph1.append(textNode1);
        var email = document.getElementById("email");
        var paragraph2 = document.createElement("p");
        var textNode2 = document.createTextNode(email.value);
        paragraph2.append(textNode2);
        var formDetails = document.getElementById("formDetails");
       
        formDetails.appendChild(paragraph1);
        formDetails.appendChild(paragraph2);
  }   
  
  //  task 2
  
  function readMore()
  {
  
     var text = "Hello my name is sohaib asif and I am web Developer and I love to play football."
      var peragraf = document.getElementById("pera");
      peragraf.innerHTML = text;
  }
  
var tableBody = document.getElementById("tableBody");

  function table(){ 
    var courses = document.getElementById("tbody");
    var rows = document.createElement("tr");
    rows.setAttribute("class","row");
    var cols = document.createElement("td");
    var colText = document.createTextNode("1");
    cols.appendChild(colText);
    var col2 = document.createElement("td");
    var col2Text = document.createTextNode("Azhar");
    col2.appendChild(col2Text);
    var col3 = document.createElement("td");
    var col3Text = document.createTextNode("9");
    col3.appendChild(col3Text);
  
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","newBtn");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);
   
  
    rows.appendChild(cols);
    rows.appendChild(col2);
    rows.appendChild(col3);
    rows.appendChild(delBtn);
    tableBody.appendChild(rows);
  }
  
  
  function deleteItem(e)
  {
      e.parentNode.remove();
  }
  







// Chapter 58-67

//  task 1

        var x = document.getElementById("main-content");
        // ii
       console.log(x.childNodes);
//        iiii
        console.log(x);
        //// iv

        var p = "Sohaib";
        var firstName = document.getElementById("firstName");
        firstName.value = p;
     
        // v
        var l = "Asif";
        var lastName = document.getElementById("lastName");
        lastName.value = l;
        
        var emaill = "sohaibasif28@gmail.com";
        var email = document.getElementById("email");
        email.value = emaill;


//         Q2 all

var formContent = document.getElementById("form-content");
console.log(formContent.nodeName)
console.log(formContent.childNodes[5].nodeType);
console.log(formContent.childNodes[5].nextSibling);
console.log(x.firstChild);
console.log(x.lastChild);
console.log(email.parentNode)
console.log(email.nodeType)


