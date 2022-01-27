import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; // optional types
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

type TextNode = {
  text: string;
};

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: 'hello' });

  setCount({ text: 'world' });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input type='text' ref={inputRef} onChange={handleChange} />
    </div>
  );
};
