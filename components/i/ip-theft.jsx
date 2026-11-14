import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wq3zxlkkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 15c-2-1.5-3.5-3.5-3.5-6a6 6 0 0 1 12 0c0 2.5-1.5 4.5-3.5 6v2H8Zm.5 5h4m3.5-3.5l5 5m-4.5 0H21V17");
}
</style><path class="wq3zxlkkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ip-theft"} {...others} />);
}

export default Component;
