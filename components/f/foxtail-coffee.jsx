import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u209hwb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.325 23.9c1.332-.357 10.88-.214 11.252 0");
}

.w1nu9b2sm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 30.219c0 3.227 3.092 11.103 12.053 5.93c8.961-5.174 11.199-22.482 23.668-25.823c6.024-1.614 3.765 7.603-6.826 3.863c-2.027-.715-4.594-1.81-6.648-2.69c-4.844-2.075-15.74-2.94-15.74 7.221");
}
</style><path class="w1nu9b2sm"/><path class="u209hwb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:foxtail-coffee"} {...others} />);
}

export default Component;
