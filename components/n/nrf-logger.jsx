import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e0gqq6b8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.601 14.914h18.68M5.5 21.338h19.781M7.455 27.763h17.826m6.781.989l9.531 9.184c2.46 2.37-.6 5.715-3.07 3.363l-9.665-9.202");
}

.ylaiqubvh {
  cx: 20.072px;
  cy: 20.471px;
  r: 14.572px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ylaiqubvh"/><path class="e0gqq6b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nrf-logger"} {...others} />);
}

export default Component;
