import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.flv7r5t3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 22.425v13.083a4 4 0 0 0 4 4h13.082c0-9.435-7.648-17.083-17.082-17.083");
}

.qt14fub-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.473v-1.98a4 4 0 0 1 4-4h31a4 4 0 0 1 4 4v23.015a4 4 0 0 1-4 4h-9.615");
}
</style><path class="flv7r5t3t"/><path class="qt14fub-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:castlab"} {...others} />);
}

export default Component;
