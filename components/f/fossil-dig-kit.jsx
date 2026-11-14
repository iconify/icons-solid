import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.by_r0tb9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5L14.5 7a2.4 2.4 0 1 1 3.75-1.25A2.4 2.4 0 1 1 17 9.5L9.5 17a2.4 2.4 0 1 1-3.75 1.25A2.4 2.4 0 1 1 7 14.5m8.5 2.5h6c0 2.5-1.5 4-3 5c-1.5-1-3-2.5-3-5m3-3.25V17");
}
</style><path class="by_r0tb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fossil-dig-kit"} {...others} />);
}

export default Component;
