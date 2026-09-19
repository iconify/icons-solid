import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jpupr2b8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.273 9.511c0-4.897 3.453-4.665 6.923-2.687L38.6 20.732c1.295.738 2.126 1.918 2.126 3.268s-.83 2.53-2.126 3.268L14.196 41.176c-3.47 1.978-6.923 2.21-6.923-2.687zm7.408 10.01v8.958m13.883-9.402v9.846M11.21 22.742v2.516m20.824-2.78v3.044m-13.882-9.223v15.403m3.471-12.711V29.01m3.47-7.032v4.044");
}
</style><path class="jpupr2b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:outertune"} {...others} />);
}

export default Component;
