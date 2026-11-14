import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iv9wf1b4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.5h5.5A1.75 1.75 0 0 1 16 5.25v2A1.75 1.75 0 0 1 14.25 9h-5.5A1.75 1.75 0 0 1 7 7.25v-2A1.75 1.75 0 0 1 8.75 3.5M2.5 9h19L19 14H5Zm.5 8.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M3 20.75q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="iv9wf1b4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ferry-terminal"} {...others} />);
}

export default Component;
