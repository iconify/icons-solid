import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7d9e3b8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 19c-1-6-.5-13 3.25-16.5c2.823 2.635 3.804 7.252 3.69 11.934M2.5 19h9.7M9 8v6.5m6 1.5c1.25-.5 2.5-.5 3.5.5c1-1 2.25-1 3.5-.5v5c-1.25-.5-2.5-.5-3.5.5c-1-1-2.25-1-3.5-.5Zm3.5.5v5");
}
</style><path class="q7d9e3b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:surf-school"} {...others} />);
}

export default Component;
