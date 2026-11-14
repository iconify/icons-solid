import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq9fc6v_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M6.415 7.543l5.211-2.43a2.625 2.625 0 0 1 3.489 1.27l.739 1.586a2.625 2.625 0 0 1-1.269 3.488l-5.211 2.43a2.625 2.625 0 0 1-3.489-1.27l-.739-1.586a2.625 2.625 0 0 1 1.269-3.488M20.5 17.5a8 8 0 0 0-1.25-4.75");
}
</style><path class="eq9fc6v_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tilt-sensor"} {...others} />);
}

export default Component;
