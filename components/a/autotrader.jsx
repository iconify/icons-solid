import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uy44r3fjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.065 21.473l4.392-11.112h-24.49a8.42 8.42 0 0 0-7.831 5.326l-2.288 5.786zM7.79 26.677L3.458 37.64h24.49a8.42 8.42 0 0 0 7.832-5.326l2.228-5.636z");
}
</style><path class="uy44r3fjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:autotrader"} {...others} />);
}

export default Component;
