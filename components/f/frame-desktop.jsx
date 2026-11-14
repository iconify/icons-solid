import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kivfy9jpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h13.75A2.625 2.625 0 0 1 21.5 6.625v6.75A2.625 2.625 0 0 1 18.875 16H5.125A2.625 2.625 0 0 1 2.5 13.375v-6.75A2.625 2.625 0 0 1 5.125 4M12 16v4m-4 0h8");
}
</style><path class="kivfy9jpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:frame-desktop"} {...others} />);
}

export default Component;
