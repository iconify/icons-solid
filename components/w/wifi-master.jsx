import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c38riwbjj {
  cx: 23.144px;
  cy: 34.192px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.794px;
  ry: 5.133px;
}

.fjrkz_o5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.083 12.126s-7.312 6.674 0 13.987m-5.55 3.45S-.79 20 10.533 8.676m21.384 3.45s7.312 6.674 0 13.987m5.55 3.45s11.325-9.563 0-20.887M23.133 28.8V15.7m4.647 4.075h-4.55");
}
</style><ellipse class="c38riwbjj"/><path class="fjrkz_o5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wifi-master"} {...others} />);
}

export default Component;
