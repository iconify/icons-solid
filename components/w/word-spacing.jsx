import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgp5-9b2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 4h1.25A2.625 2.625 0 0 1 9.5 6.625v1.25A2.625 2.625 0 0 1 6.875 10.5h-1.25A2.625 2.625 0 0 1 3 7.875v-1.25A2.625 2.625 0 0 1 5.625 4m11.5 0h1.25A2.625 2.625 0 0 1 21 6.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-1.25A2.625 2.625 0 0 1 14.5 7.875v-1.25A2.625 2.625 0 0 1 17.125 4M4.5 17h15m-13-2l-2 2l2 2m11-4l2 2l-2 2");
}
</style><path class="cgp5-9b2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:word-spacing"} {...others} />);
}

export default Component;
