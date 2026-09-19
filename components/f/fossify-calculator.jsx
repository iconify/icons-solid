import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rp318acxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.357 11.022h12.646M5.5 34.875h14.36m-7.18-7.181v14.361M31.1 5.945L41.254 16.1m0-10.155L31.1 16.1m-1.246 14.381H42.5m-12.646 8.787H42.5");
}
</style><path class="rp318acxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fossify-calculator"} {...others} />);
}

export default Component;
