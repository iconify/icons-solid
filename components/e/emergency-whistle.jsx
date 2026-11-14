import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y04ax2byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 9.5A5.5 5.5 0 1 1 9.75 13H3V9.5Zm-4.25-1.75a8.5 8.5 0 0 1 8.5 0M9.25 5a11.5 11.5 0 0 1 11.5 0");
}
</style><path class="y04ax2byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:emergency-whistle"} {...others} />);
}

export default Component;
