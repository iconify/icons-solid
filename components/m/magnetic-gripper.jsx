import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jc07pybut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5v-4a7 7 0 0 1 14 0v4h-4v-4a3 3 0 0 0-6 0v4ZM5 17h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 17m0-5.5h4m6 0h4");
}
</style><path class="jc07pybut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:magnetic-gripper"} {...others} />);
}

export default Component;
