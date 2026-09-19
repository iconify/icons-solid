import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qrl84lulh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.338 42.5l20.514-37l3.802 37M17.382 31.598h17.15M8.008 42.5h9.374m13.933 0h8.677M27.728 31.598L26.371 42.5m-4.238 0l2.161-15.538");
}

.s_x538i_w {
  cx: 26.449px;
  cy: 26.962px;
  r: 2.156px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="qrl84lulh"/><circle class="s_x538i_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stavanger-aftenblad"} {...others} />);
}

export default Component;
