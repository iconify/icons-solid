import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.og4jscc7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.246 6.927l-5.198 3.639a1.75 1.75 0 0 0 0 2.868l5.198 3.639A1.75 1.75 0 0 0 15 15.639V8.361a1.75 1.75 0 0 0-2.754-1.434M19.5 5v14");
}
</style><path class="og4jscc7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:step-back"} {...others} />);
}

export default Component;
