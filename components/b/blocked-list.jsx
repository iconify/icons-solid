import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wngoluuud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 6.5H21M3 13.25h18M3 20h18M2.5 6.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m1-2.25L8 8.75");
}
</style><path class="wngoluuud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blocked-list"} {...others} />);
}

export default Component;
