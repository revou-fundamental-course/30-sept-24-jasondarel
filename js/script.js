document.getElementById('temperature-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;
    let result = '';
    let explanation = '';
    let formula = '';

    if (isNaN(temperature)) {
        alert('Tolong masukkan suhu yang valid.');
        return;
    }

    if (scale === 'Celsius') {
        result = (temperature * 9/5) + 32;
        explanation = `${temperature}°C sama dengan ${result.toFixed(2)}°F`;
        formula = `Rumus: (${temperature} × 9/5) + 32 = ${result.toFixed(2)}°F`;
    } else if (scale === 'Fahrenheit') {
        result = (temperature - 32) * 5/9;
        explanation = `${temperature}°F sama dengan ${result.toFixed(2)}°C`;
        formula = `Rumus: (${temperature} - 32) × 5/9 = ${result.toFixed(2)}°C`;
    }

    document.getElementById('conversion-result').innerText = `Hasil: ${result.toFixed(2)}`;
    document.getElementById('conversion-explanation').innerText = explanation;
    document.getElementById('conversion-formula').innerText = formula;
});
