import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_hiobbzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 6.5l3.5-3.25M10.25 6.5h3.5v3.25L16 12c.6.6.75 1.25.75 2.1V19a2.25 2.25 0 0 1-2.25 2.25h-5A2.25 2.25 0 0 1 7.25 19v-4.9c0-.85.15-1.5.75-2.1l2.25-2.25Zm8.25-.75C17.5 7 17 7.75 17 8.5a1.5 1.5 0 0 0 3 0c0-.75-.5-1.5-1.5-2.75");
}
</style><path class="c_hiobbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:oil-bottle"} {...others} />);
}

export default Component;
