import React from 'react';
import { mount } from 'enzyme';

import Note from './note';

const props = { note: { text: 'test note' }};

describe('The Note component', () => {
  let note = mount(<Note {...props} />);

  it('should render note text', () => {
    expect(note.find('p').text()).toEqual(props.note.text);
  });
});
