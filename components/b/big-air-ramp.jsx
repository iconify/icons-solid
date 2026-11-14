import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4exn2bsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 20.5h-19q10 0 13-8v8M14.487 6.25l4.758-2.219a1.375 1.375 0 0 1 1.827.665a1.375 1.375 0 0 1-.665 1.828l-4.758 2.218a1.375 1.375 0 0 1-1.827-.665a1.375 1.375 0 0 1 .665-1.827");
}
</style><path class="a4exn2bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:big-air-ramp"} {...others} />);
}

export default Component;
