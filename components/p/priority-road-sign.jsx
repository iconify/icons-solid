import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nz22_ibnl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.25 1.75h-8.5q-2.485 0-4.243 1.757Q1.75 5.265 1.75 7.75v8.5q0 2.485 1.757 4.243Q5.265 22.25 7.75 22.25h8.5q2.485 0 4.243-1.757q1.757-1.758 1.757-4.243v-8.5q0-2.485-1.757-4.243Q18.735 1.75 16.25 1.75");
}
</style><path class="nz22_ibnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:priority-road-sign"} {...others} />);
}

export default Component;
