// 1. What is the difference between interpolation and concatenation? Give an example of each.
// interpolation is the process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.
// example: var apples = 4;
// var bananas = 3;
// console.log(`I have ${apples + bananas} fruit`);

// concatetation is  the operation of joining two strings together.
// example: var str1 = "Hello ";
// var str2 = "world!";
// var str3 = " Have a nice day!";
// var res = str1.concat(str2, str3);

//2. DRY code means don't repeat yourself. Functions


//3. Declaration tells you what you're going to name the variable. Assigning tells you what value the variable will receive.
//4.let and const are block scope. Const can not be redefined.
//5. Refers to the directory above another directory.
//6. The man function
//7. tab completion automatically completes unambiguous commands

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a<b);
  console.log(c>d);
  console.log('Name' == 'Name');
  console.log(a+b == c);
  console.log(a * a == d);
  console.log(e == 'Kevin');
  console.log(48 != '48');

//1. Both for loop and while loop are used to excute one or more lines of code certain number of times.
//2.
for (let i =0; i<1000; i++)

	console.log(i);

//3. first part of the control statement is defining the number the loop will begin at
// the second part tells you when the loop will stop
// the third tells the loop to count up

for (let i = 999; i>0; i--)
	console.log(i);


for (let i = 0; i<=10; i++)
	console.log("The value of is:" + " " + i + " of 10");
