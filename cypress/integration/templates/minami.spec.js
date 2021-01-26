/* eslint-disable newline-per-chained-call */

describe('Template: minami', () => {
  before(() => {
    cy.visit('/../../../example/docs-minami/module-better-components_BetterCounter.html');
    cy.screenshot();
  });

  it('should renders module name correctly', () => {
    cy
      .get('.page-title')
      .contains('better-components/BetterCounter');

    cy
      .get('.nav-item-name a[href="module-better-components_BetterCounter.html"]')
      .contains('better-components/BetterCounter');
  });

  it('should renders props correctly', () => {
    const props = [
      {
        name: '<code>initialCounter</code>',
        type: '<code>Number</code>',
        defaultValue: '-',
        required: '<b>Yes</b>',
        description: '-',
      },
      {
        name: '<code>step</code>',
        type: '<code>Number</code>',
        defaultValue: '<code>1</code>',
        required: 'No',
        description: 'Step',
      },
    ];

    cy.get('[data-jsdoc-vuejs="section-props"]').contains('Props').should('have.class', 'subsection-title');
    cy.get('[data-jsdoc-vuejs="table-props"]').as('table-props').should('have.class', 'params');

    cy
      .get('@table-props')
      .find('> thead > tr > th')
      .contains('Name')
      .next().contains('Type')
      .next().contains('Default value')
      .next().contains('Required?')
      .next().contains('Description');

    cy
      .get('@table-props')
      .find('> tbody > tr')
      .then(($rows) => {
        expect($rows).to.have.length(2);

        props.forEach((prop, i) => {
          const $row = $rows.eq(i);
          const $children = $row.children();

          expect($children.eq(0).html()).to.eq(prop.name);
          expect($children.eq(0).attr('class')).to.eq('name');
          expect($children.eq(1).html()).to.eq(prop.type);
          expect($children.eq(2).html()).to.eq(prop.defaultValue);
          expect($children.eq(3).html()).to.eq(prop.required);
          expect($children.eq(4).html()).to.eq(prop.description);
        });
      });
  });

  it('should renders data correctly', () => {
    const data = [
      {
        name: '<code>counter</code>',
        type: '<code>Number</code>',
        defaultValue: '-',
        description: "Current counter's value",
      },
    ];

    cy.get('[data-jsdoc-vuejs="section-data"]').contains('Data').should('have.class', 'subsection-title');
    cy.get('[data-jsdoc-vuejs="table-data"]').as('table-data').should('have.class', 'params');

    cy
      .get('@table-data')
      .find('> thead > tr > th')
      .contains('Name')
      .next().contains('Type')
      .next().contains('Default value')
      .next().contains('Description');

    cy
      .get('@table-data')
      .find('> tbody > tr')
      .then(($rows) => {
        expect($rows).to.have.length(1);

        data.forEach((d, i) => {
          const $row = $rows.eq(i);
          const $children = $row.children();

          expect($children.eq(0).html()).to.eq(d.name);
          expect($children.eq(1).html()).to.eq(d.type);
          expect($children.eq(2).html()).to.eq(d.defaultValue);
          expect($children.eq(3).html()).to.eq(d.description);
        });
      });
  });

  it('should renders computed correctly', () => {
    const computeds = [
      { name: '<code>fooList</code>', type: '<code>Array.&lt;String&gt;</code>', description: 'A list of foo' },
      { name: '<code>barList</code>', type: '<code>Array.&lt;String&gt;</code>', description: 'A list of bar' },
      { name: '<code>message</code>', type: '<code>String</code>', description: 'A message' },
    ];

    cy.get('[data-jsdoc-vuejs="section-computed"]').contains('Computed').should('have.class', 'subsection-title');
    cy.get('[data-jsdoc-vuejs="table-computed"]').as('table-computed').should('have.class', 'params');

    cy
      .get('@table-computed')
      .find('> thead > tr > th')
      .contains('Name')
      .next().contains('Type')
      .next().contains('Description');

    cy
      .get('@table-computed')
      .find('> tbody > tr')
      .then(($rows) => {
        expect($rows).to.have.length(3);

        computeds.forEach((computed, i) => {
          const $row = $rows.eq(i);
          const $children = $row.children();

          expect($children.eq(0).html()).to.eq(computed.name);
          expect($children.eq(0).attr('class')).to.eq('name');
          expect($children.eq(1).html()).to.eq(computed.type);
          expect($children.eq(2).html()).to.eq(computed.description);
        });
      });
  });

  it('should render methods properly', () => {
    cy.contains('h3', 'Methods').should('have.attr', 'class', 'subsection-title');
    cy.get('#decrement')
      .contains('decrement()')
      .next('.description')
      .next('.details')
      .contains('a[href="better-components_BetterCounter.vue.html#line52"]', 'line 52');

    cy.get('#increment')
      .contains('increment()')
      .next('.description')
      .next('.details')
      .contains('a[href="better-components_BetterCounter.vue.html#line45"]', 'line 45');

    cy.get('#showDialog')
      .contains('showDialog(counter)')
      .next('.description')
      .next('.details')
      .contains('a[href="better-components_BetterCounter.vue.html#line60"]', 'line 60');

    cy.contains('created()').should('not.exist');
  });
});

describe('Template JS: minami', () => {
  before(() => {
    cy.visit('/../../../example/docs-minami/module-CounterJS.html');
    cy.screenshot();
  });

  it('should renders module name correctly', () => {
    cy
      .get('.page-title')
      .contains('CounterJS');

    cy
      .get('.nav-item-name a[href="module-CounterJS.html"]')
      .contains('CounterJS');
  });

  it('should renders props correctly', () => {
    const props = [
      {
        name: '<code>initialCounter</code>',
        type: '<code>Number</code>',
        defaultValue: '-',
        required: '<b>Yes</b>',
        description: '-',
      },
      {
        name: '<code>step</code>',
        type: '<code>Number</code>',
        defaultValue: '<code>1</code>',
        required: 'No',
        description: 'Step',
      },
    ];

    cy.get('[data-jsdoc-vuejs="section-props"]').contains('Props').should('have.class', 'subsection-title');
    cy.get('[data-jsdoc-vuejs="table-props"]').as('table-props').should('have.class', 'params');

    cy
      .get('@table-props')
      .find('> thead > tr > th')
      .contains('Name')
      .next().contains('Type')
      .next().contains('Default value')
      .next().contains('Required?')
      .next().contains('Description');

    cy
      .get('@table-props')
      .find('> tbody > tr')
      .then(($rows) => {
        expect($rows).to.have.length(2);

        props.forEach((prop, i) => {
          const $row = $rows.eq(i);
          const $children = $row.children();

          expect($children.eq(0).html()).to.eq(prop.name);
          expect($children.eq(0).attr('class')).to.eq('name');
          expect($children.eq(1).html()).to.eq(prop.type);
          expect($children.eq(2).html()).to.eq(prop.defaultValue);
          expect($children.eq(3).html()).to.eq(prop.required);
          expect($children.eq(4).html()).to.eq(prop.description);
        });
      });
  });

  it('should renders data correctly', () => {
    const data = [
      {
        name: '<code>counter</code>',
        type: '<code>Number</code>',
        defaultValue: '-',
        description: "Current counter's value",
      },
    ];

    cy.get('[data-jsdoc-vuejs="section-data"]').contains('Data').should('have.class', 'subsection-title');
    cy.get('[data-jsdoc-vuejs="table-data"]').as('table-data').should('have.class', 'params');

    cy
      .get('@table-data')
      .find('> thead > tr > th')
      .contains('Name')
      .next().contains('Type')
      .next().contains('Default value')
      .next().contains('Description');

    cy
      .get('@table-data')
      .find('> tbody > tr')
      .then(($rows) => {
        expect($rows).to.have.length(1);

        data.forEach((d, i) => {
          const $row = $rows.eq(i);
          const $children = $row.children();

          expect($children.eq(0).html()).to.eq(d.name);
          expect($children.eq(1).html()).to.eq(d.type);
          expect($children.eq(2).html()).to.eq(d.defaultValue);
          expect($children.eq(3).html()).to.eq(d.description);
        });
      });
  });

  it('should renders computed correctly', () => {
    const computeds = [
      { name: '<code>fooList</code>', type: '<code>Array.&lt;String&gt;</code>', description: 'A list of foo' },
      { name: '<code>barList</code>', type: '<code>Array.&lt;String&gt;</code>', description: 'A list of bar' },
      { name: '<code>message</code>', type: '<code>String</code>', description: 'A message' },
    ];

    cy.get('[data-jsdoc-vuejs="section-computed"]').contains('Computed').should('have.class', 'subsection-title');
    cy.get('[data-jsdoc-vuejs="table-computed"]').as('table-computed').should('have.class', 'params');

    cy
      .get('@table-computed')
      .find('> thead > tr > th')
      .contains('Name')
      .next().contains('Type')
      .next().contains('Description');

    cy
      .get('@table-computed')
      .find('> tbody > tr')
      .then(($rows) => {
        expect($rows).to.have.length(3);

        computeds.forEach((computed, i) => {
          const $row = $rows.eq(i);
          const $children = $row.children();

          expect($children.eq(0).html()).to.eq(computed.name);
          expect($children.eq(0).attr('class')).to.eq('name');
          expect($children.eq(1).html()).to.eq(computed.type);
          expect($children.eq(2).html()).to.eq(computed.description);
        });
      });
  });

  it('should render methods properly', () => {
    cy.contains('h3', 'Methods').should('have.attr', 'class', 'subsection-title');
    cy.get('#decrement')
      .contains('decrement()')
      .next('.description')
      .next('.details')
      .contains('a[href="js_CounterJS.js.html#line43"]', 'line 43');

    cy.get('#increment')
      .contains('increment()')
      .next('.description')
      .next('.details')
      .contains('a[href="js_CounterJS.js.html#line36"]', 'line 36');

    cy.get('#showDialog')
      .contains('showDialog(counter)')
      .next('.description')
      .next('.details')
      .contains('a[href="js_CounterJS.js.html#line51"]', 'line 51');

    cy.contains('created()').should('not.exist');
  });
});
