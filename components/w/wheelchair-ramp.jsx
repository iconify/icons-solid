import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3ofbrbmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 20.25h16.5q1 0 1-1V10q0-1-.85-.48L3.6 19.73q-.85.52.15.52M5 14.75l9-5.5m-3.6-.4l3.6.4l-1.52 3.27");
}
</style><path class="n3ofbrbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wheelchair-ramp"} {...others} />);
}

export default Component;
