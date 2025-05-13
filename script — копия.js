document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const messageDiv = document.getElementById('registration-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 


        const name = document.getElementById('name').value;
        const group = document.getElementById('group').value;

        if (name.trim() === '' || group.trim() === '') {
            messageDiv.className = 'message error';
            messageDiv.textContent = 'Пожалуйста, заполните все поля.';
            return; 
        }

        
        messageDiv.className = 'message success';
        messageDiv.textContent = `Вы успешно зарегистрированы, ${name}! До встречи 13 сентября!`;

        // Очищаем форму 
        form.reset();
    });
});