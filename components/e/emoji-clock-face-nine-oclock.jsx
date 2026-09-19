import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.up04qr5jv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 8.108v15.89m0 0l-10.641.03M2.5 23.998c-.002 11.874 9.623 21.5 21.497 21.502S45.498 35.878 45.5 24.005v-.007C45.5 12.125 35.874 2.5 24 2.5S2.5 12.125 2.5 23.998");
}
</style><path class="up04qr5jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-clock-face-nine-oclock"} {...others} />);
}

export default Component;
