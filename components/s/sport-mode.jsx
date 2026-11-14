import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3pyobjbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4h9.441A1.548 1.548 0 0 1 17.5 6.375l-.91 1.441a1.75 1.75 0 0 0 0 1.868l.91 1.441a1.548 1.548 0 0 1-1.309 2.375H6.75A1.75 1.75 0 0 1 5 11.75v-6A1.75 1.75 0 0 1 6.75 4M5 3v18m5-17v9.5M14.75 4v9.5M5 8.75h12.25");
}
</style><path class="b3pyobjbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sport-mode"} {...others} />);
}

export default Component;
