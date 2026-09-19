import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q7g_7nb_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.053 41.255l-.058-20.948l18.505-7.05m-37 0l18.495 7.05");
}

.qig7zd4-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 13.257l18.553 27.998L42.5 13.256l-18.505-6.51z");
}
</style><path class="qig7zd4-j"/><path class="q7g_7nb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tonkeeper"} {...others} />);
}

export default Component;
