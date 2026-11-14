import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9fiexgxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h4.25A2.625 2.625 0 0 1 12 5.125v2.25A2.625 2.625 0 0 1 9.375 10h-4.25A2.625 2.625 0 0 1 2.5 7.375v-2.25A2.625 2.625 0 0 1 5.125 2.5m0 11.5h4.25A2.625 2.625 0 0 1 12 16.625v2.25A2.625 2.625 0 0 1 9.375 21.5h-4.25A2.625 2.625 0 0 1 2.5 18.875v-2.25A2.625 2.625 0 0 1 5.125 14m2.125-4v4m7.5 4l2 2L21 15.75");
}
</style><path class="m9fiexgxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:integration-test"} {...others} />);
}

export default Component;
