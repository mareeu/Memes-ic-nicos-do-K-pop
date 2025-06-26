document.getElementById('formContato').addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('feedback');

    // Limpar mensagens anteriores
    feedback.innerHTML = '';
    feedback.style.color = 'red';

    // Verificar campos vazios
    if (!nome || !email || !assunto || !mensagem){
        feedback.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Verificar formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        feedback.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    // Verificar tamanho mínimo da mensagem
    if (mensagem.length < 20){
        feedback.textContent = 'A mensagem deve ter pelo menos 20 caracteres.';
        return;
    }

    // Se tudo estiver correto
    feedback.style.color = 'green';
    feedback.textContent = 'Mensagem enviada com sucesso! Obrigado pela colaboração.🤗';

    // Limpar o formulário
    document.getElementById('formContato').reset();
});