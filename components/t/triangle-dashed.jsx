import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4kigyboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 6L12 4l1.25 2m6.5 11.5l1.25 2h-2.25m-13.5 0H3l1.25-2m10.25-9l1.25 2m1.5 2.5l1.25 2m-2.75 4.5H13.5m-3 0H8.25M5.5 15l1.25-2m1.5-2.5l1.25-2");
}
</style><path class="b4kigyboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:triangle-dashed"} {...others} />);
}

export default Component;
