import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ls378rbzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21.5v-3c-2-1.25-2.75-3.25-2.75-5.25c0-3.25 2.5-5.5 5.75-5.5c3 0 5.25 2 5.25 5L18 15.5c.25.5 0 .75-.5.75h-.75v1.5c0 .75-.5 1.25-1.25 1.25H14v2.5M11.5 7.75V6q1-4 7.5-3.5q-1.5 4-7.5 3.5");
}
</style><path class="ls378rbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:head-leaf"} {...others} />);
}

export default Component;
