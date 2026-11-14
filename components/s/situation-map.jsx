import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edk6xlbwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.697 5.101l4.289-1.43a1.75 1.75 0 0 1 1.035-.022l5.958 1.702a1.75 1.75 0 0 0 1.035-.022l3.183-1.061a1.75 1.75 0 0 1 2.303 1.66v11.311a1.75 1.75 0 0 1-1.197 1.66l-4.289 1.43a1.75 1.75 0 0 1-1.035.022l-5.958-1.702a1.75 1.75 0 0 0-1.035.022l-3.183 1.061a1.75 1.75 0 0 1-2.303-1.66V6.761a1.75 1.75 0 0 1 1.197-1.66M5.5 15.5l2-1.25M10 12.5l2-1.25m4.5-2.75h.01");
}
</style><path class="edk6xlbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:situation-map"} {...others} />);
}

export default Component;
