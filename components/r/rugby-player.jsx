import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.olq7-lbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21.5c0-4.25 3.5-7 7-7c1.056 0 2.113.251 3.073.717M14 21.5a7 7 0 0 1 7.5-7.5a7 7 0 0 1-7.5 7.5");
}
</style><path class="olq7-lbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rugby-player"} {...others} />);
}

export default Component;
