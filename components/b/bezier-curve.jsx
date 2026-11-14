import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2sxgjhko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19.5c7.5 0 3.5-15 11-15m-15 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15-15a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="z2sxgjhko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bezier-curve"} {...others} />);
}

export default Component;
