import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pmkklwbja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5za2 2 0 0 1 2 2v9a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m2 5h3.25m-3.25 3h3.25M9.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}
</style><path class="pmkklwbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:door-knob"} {...others} />);
}

export default Component;
