import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s5jb_rb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5H7A3.5 3.5 0 1 0 3.5 14m18-7.5H17a3.5 3.5 0 1 0 3.5 3.5m-18-3.5q2.25-2 4.5 0t4.5 0m1 11q2.25 2 4.5 0t4.5 0");
}
</style><path class="s5jb_rb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:turbulence"} {...others} />);
}

export default Component;
