import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dkhgrab-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.81 34.162H8.79a3.29 3.29 0 0 1-3.29-3.29V9.055a3.29 3.29 0 0 1 3.29-3.29h20.73a3.29 3.29 0 0 1 3.29 3.29z");
}

.qyif1_lty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.807 13.828h6.4a3.297 3.297 0 0 1 3.293 3.293v21.821a3.297 3.297 0 0 1-3.293 3.293H18.484a3.29 3.29 0 0 1-3.293-3.293v-4.781m-3.14-21.723h12.218m-12.218 4.143h6.109");
}
</style><path class="dkhgrab-g"/><path class="qyif1_lty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oneplus-tips"} {...others} />);
}

export default Component;
