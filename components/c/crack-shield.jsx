import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y2vlncaes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 3.25L4.5 5.5v6c0 4.7 2.9 8 6.25 9.5l-1.5-5l2-4L9.5 8Zm3 0L19.5 5.5v6c0 4.7-2.9 8-5.75 9.5l-1.5-5l2-4l-1.75-4Z");
}
</style><path class="y2vlncaes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crack-shield"} {...others} />);
}

export default Component;
