import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a5gakpdjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.989 20.3L13.75 16C15.5 11 14 5 9.5 3l-1 1.5C6 5.5 4 8 3 10.5l1.5 2l4-1.5c-.5 2.5-2.5 4-3 5l-1 4.5h9.4m2.6 1l5-5m-4 0h4v4");
}
</style><path class="a5gakpdjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chess-move"} {...others} />);
}

export default Component;
