import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzz75obeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.01 4.99za3 3 0 0 1 0 4.242L9.232 17.01a3 3 0 0 1-4.242 0a3 3 0 0 1 0-4.242l7.778-7.778a3 3 0 0 1 4.242 0M8.879 8.879l4.242 4.242M18 15v6m-3-3h6");
}
</style><path class="lzz75obeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:medicine-plus"} {...others} />);
}

export default Component;
