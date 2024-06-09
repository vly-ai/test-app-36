```typescript
/**
 * AlarmItem.tsx
 * 
 * Purpose:
 * This component renders an individual alarm item which includes details like
 * the alarm time, a label, and status (on/off). It also allows for the alarm 
 * to be toggled on or off.
 *
 * Functions:
 * - AlarmItem: The main functional component to render an alarm item.
 * 
 * Arguments:
 * - props: an object containing the following properties:
 *   - time: string - The time when the alarm is set.
 *   - label: string - A label or description for the alarm.
 *   - isActive: boolean - The status of the alarm (on/off).
 *   - onToggle: Function - Callback function when the alarm is toggled.
 * 
 * Returns:
 * - JSX.Element: A JSX element representing an individual alarm item.
 * 
 * Description:
 * This functional component uses React and TypeScript. It utilizes props to render
 * alarm details and manages the toggle state through a parent callback.
 */

import React from 'react';

// Define the shape of props this component will receive.
interface AlarmItemProps {
  time: string;
  label: string;
  isActive: boolean;
  onToggle: () => void;
}

// Define the functional component.
const AlarmItem: React.FC<AlarmItemProps> = ({ time, label, isActive, onToggle }) => {

  return (
    <div className="alarm-item">
      <div className="time-label">
        <span className="time">{time}</span>
        <span className="label">{label}</span>
      </div>
      <div className="toggle-switch">
        <input
          type="checkbox"
          checked={isActive}
          onChange={onToggle}
        />
      </div>
    </div>
  );
}

export default AlarmItem;
```

This file creates a UI component for individual alarm items, complying with React and TypeScript standards. The component named `AlarmItem` accepts `props` for displaying the alarm's time, label, status (active/inactive), and a function to toggle the alarm status. The detailed documentary on top outlines the purpose, functions, arguments, and description of the component, providing a clear understanding of its usage and functionality.