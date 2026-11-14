import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r53po7wbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2v-7.5m1.732 10.5L20.227 19m-9.959-3.75L3.773 19");
}
</style><path class="r53po7wbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:helicopter-rotor"} {...others} />);
}

export default Component;
