/* RESUMO WRAPPER */
document.addEventListener('DOMContentLoaded', () => {

    const resumoScroll = document.getElementById('resumoScroll');

    if (resumoScroll) {

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        resumoScroll.addEventListener('mousedown', (e) => {
            isDragging = true;
            resumoScroll.classList.add('grabbing');

            startX = e.pageX;
            scrollLeft = resumoScroll.scrollLeft;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            e.preventDefault();

            const walk = e.pageX - startX;
            resumoScroll.scrollLeft = scrollLeft - walk;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            resumoScroll.classList.remove('grabbing');
        });
    }


    /* ATIVIDADES WRAPPER */
    const atividades = [
        {
            materia: "matematica",
            titulo: "Lista de Exercícios",
            data: "20/06/2026",
            status: "Pendente"
        },
        {
            materia: "filosofia",
            titulo: "Questionário",
            data: "22/06/2026",
            status: "Concluído"
        },
        {
            materia: "geografia",
            titulo: "Pesquisa sobre Globalização",
            data: "25/06/2026",
            status: "Pendente"
        },
        {
            materia: "ingles",
            titulo: "Seminário de Filmes",
            data: "27/06/2026",
            status: "Concluído"
        }
    ];

    const container = document.getElementById('cards-container');
    console.log('Container:', container);

    if (!container) {
        console.error('Elemento #cards-container não encontrado');
        return;
    }

    function criarCardAtividade({
        materia,
        titulo,
        data,
        status
    }) {
        return `
            <div class="card-atividades ${materia}">
                <div class="card-atividades-title">
                      ${materia} - ${titulo}
                </div>
                <div class="card-atividades-data">
                ${data}
                </div>

                <div class="card-atividades-status">
                    Status: ${status}
                </div>
            </div>
        `;
    }

    console.log('Atividades:', atividades);
    container.innerHTML = atividades
        .map(criarCardAtividade)
        .join('');

    console.log('HTML gerado:', container.innerHTML);

});
