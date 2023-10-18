function calculateBMI() {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let BMI=weight/(height*height);
  document.getElementById("result").innerHTML=BMI.toFixed(2);
  
}