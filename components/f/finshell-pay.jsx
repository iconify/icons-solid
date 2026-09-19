import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c-vam9bwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.875 34.706V4.5h15.617c6.449 0 6.43 7.273 0 7.273h-7.874v6.88h7.94c5.929 0 5.927 7.338 0 7.338h-7.48V43.5");
}

.g0r_3g__a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.95 43.5V33.198c13.345.273 15.176-12.952 8.136-18.346");
}
</style><path class="c-vam9bwc"/><path class="g0r_3g__a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:finshell-pay"} {...others} />);
}

export default Component;
