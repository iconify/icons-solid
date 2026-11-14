import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.txyqutb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h2.75A2.625 2.625 0 0 1 10.5 5.125v2.75A2.625 2.625 0 0 1 7.875 10.5h-2.75A2.625 2.625 0 0 1 2.5 7.875v-2.75A2.625 2.625 0 0 1 5.125 2.5m11 0h2.75A2.625 2.625 0 0 1 21.5 5.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 13.5 7.875v-2.75A2.625 2.625 0 0 1 16.125 2.5m-5.5 11h2.75A2.625 2.625 0 0 1 16 16.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 18.875v-2.75a2.625 2.625 0 0 1 2.625-2.625");
}
</style><path class="txyqutb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:device-group"} {...others} />);
}

export default Component;
