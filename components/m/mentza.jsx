import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zc2af9rum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.816 8.55c5.819 3.149 9.773 9.282 9.773 16.36c0 10.278-8.325 18.59-18.59 18.59S5.412 35.188 5.412 24.91c0-7.078 3.954-13.211 9.773-16.36M24 4.5v13.165M29.668 4.5v16.944M18.332 4.5v16.944");
}
</style><path class="zc2af9rum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mentza"} {...others} />);
}

export default Component;
