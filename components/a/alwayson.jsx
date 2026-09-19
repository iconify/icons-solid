import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.coe4-2-4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.286 43.5H14.714a2.457 2.457 0 0 1-2.457-2.457V6.957c0-1.357 1.1-2.457 2.457-2.457h18.572c1.357 0 2.457 1.1 2.457 2.457v34.085c0 1.358-1.1 2.458-2.457 2.458m2.454-5.772H12.26m23.48-27.456H12.26M30.238 21.03H17.762m0-3.919h12.476");
}
</style><path class="coe4-2-4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alwayson"} {...others} />);
}

export default Component;
