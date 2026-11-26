alert("Script Loaded");
function calculateAge() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let monthDiff = today.getMonth() - dob.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < dob.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your Age: " + age + " years";
}
}

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

    let bmi = weight / (height * height);

    document.getElementById("bmiResult").innerText =
        "BMI: " + bmi.toFixed(2);
}

function calculatePercentage() {
    let obtained = document.getElementById("obtainedMarks").value;
    let total = document.getElementById("totalMarks").value;

    let percentage = (obtained / total) * 100;

    document.getElementById("percentageResult").innerText =
        "Percentage: " + percentage.toFixed(2) + "%";
}

function generatePassword() {
    let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    let password = "";

    for (let i = 0; i < 12; i++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    document.getElementById("passwordResult").innerText = password;
}

function generateQR() {
    let text = document.getElementById("qrText").value;

    document.getElementById("qrResult").innerHTML =
        "<img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        text +
        "'>";
}

function toggleDarkMode() {
    alert("Dark Mode Working");
    document.body.classList.toggle("dark");
}

function convertMeter() {
    let meter = document.getElementById("meterInput").value;

    let cm = meter * 100;

    document.getElementById("unitResult").innerText =
        meter + " Meter = " + cm + " Centimeters";
}

function calculateEMI() {
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let annualRate = parseFloat(document.getElementById("interestRate").value);
    let years = parseInt(document.getElementById("loanYears").value);

    let monthlyRate = annualRate / 12 / 100;
    let months = years * 12;

    let emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹" + emi.toFixed(2);
}

function calculateDiscount() {
    let price = parseFloat(document.getElementById("originalPrice").value);
    let discount = parseFloat(document.getElementById("discountPercent").value);

    let finalPrice = price - (price * discount / 100);

    document.getElementById("discountResult").innerText =
        "Final Price: ₹" + finalPrice.toFixed(2);
}

function convertCurrency() {
    let usd = parseFloat(document.getElementById("usdAmount").value);

    let inr = usd * 85;

    document.getElementById("currencyResult").innerText =
        usd + " USD = ₹" + inr.toFixed(2);
}

function calculateGST() {
    let amount = parseFloat(document.getElementById("gstAmount").value);
    let rate = parseFloat(document.getElementById("gstRate").value);

    let gst = (amount * rate) / 100;
    let total = amount + gst;

    document.getElementById("gstResult").innerText =
        "GST: ₹" + gst.toFixed(2) +
        " | Total: ₹" + total.toFixed(2);
}
