describe('Cypress Request to our page', () => {
  it('causes an incorrect header check exception to be thrown', () => {
    cy.request('https://cmmiinstitute.com/');
  });
});
