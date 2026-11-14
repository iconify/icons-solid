import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-2uclb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 18 7H6a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 6 4M4.5 7L3 20.5h7.5l1.5-7l1.5 7H21L19.5 7");
}
</style><path class="e-2uclb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boxer-shorts"} {...others} />);
}

export default Component;
