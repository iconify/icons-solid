import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g2n1yxcoe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.401 31.79S23.24 26.3 28.426 14.752c2.696 1.66 15.074 7.745 15.074 7.745c-3.527 6.361-22.68 16.042-39 7.191c4.979-1.66 10.096-7.537 10.096-7.537c1.521 2.558 3.758 4.458 3.758 4.458");
}
</style><path class="g2n1yxcoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:m-pesa-alt"} {...others} />);
}

export default Component;
