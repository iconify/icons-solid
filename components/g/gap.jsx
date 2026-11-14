import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j3pqqzqly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4za2 2 0 0 1 2 2v12a2 2 0 0 1-2 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v12a2 2 0 0 1-2 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M9.25 12h5.5m-3.5-2l-2 2l2 2m1.5-4l2 2l-2 2");
}
</style><path class="j3pqqzqly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gap"} {...others} />);
}

export default Component;
