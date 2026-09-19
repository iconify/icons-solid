import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ouqr_6bua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.568 39.417h34.864M24 42.5v-3.083M6.568 15.572v12.226a7.542 7.542 0 0 0 15.083 0V15.572m5.155 15.681c1.391 3.136 4.731 4.086 7.167 4.086a7.46 7.46 0 0 0 7.46-7.46h0a7.46 7.46 0 0 0-7.46-7.46h-.17a7.454 7.454 0 0 1-7.453-7.453h0A7.466 7.466 0 0 1 33.814 5.5c2.436 0 5.776.95 7.167 4.086");
}
</style><path class="ouqr_6bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:unite-students"} {...others} />);
}

export default Component;
