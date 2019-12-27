import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Testing',
  };
  
  export const test =()=><textarea onClick={action('clicked')}>this is storybook test area</textarea>;