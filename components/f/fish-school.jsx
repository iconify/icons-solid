import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue36z7nbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 5c-1.5-3-5.5-3-7 0L4 3v4l2-2c1.5 3 5.5 3 7 0m7.5 7c-1.5-3-5.5-3-7 0l-2-2v4l2-2c1.5 3 5.5 3 7 0m-8 7c-1.5-3-5.5-3-7 0l-2-2v4l2-2c1.5 3 5.5 3 7 0");
}
</style><path class="ue36z7nbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fish-school"} {...others} />);
}

export default Component;
