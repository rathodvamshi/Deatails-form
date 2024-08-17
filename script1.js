const scriptURL = 'https://script.google.com/macros/s/AKfycbw322-MOcS8mkEDvLTrM8vC_N9eLTwaM43lXJfYvdwu8qveBfahQUpfb4c2NCH04JoT/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            alert('Successfully submitted!');
            form.reset(); // Reset form fields after submission
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('There was an error filling the form.');
        });
});
