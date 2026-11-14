import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar3tm1vxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.005 2.631l-4.242 4.242l6.364 6.364l4.242-4.242m-4.242-4.243l-4.243 4.243m6.364-2.122l-4.243 4.243m-1.06-1.061l-5.834 5.834m-.354-.353l.707.707a2 2 0 0 1 0 2.828a2 2 0 0 1-2.828 0l-.707-.707a2 2 0 0 1 0-2.828a2 2 0 0 1 2.828 0");
}
</style><path class="ar3tm1vxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compost-fork"} {...others} />);
}

export default Component;
