import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hsgd_gbgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.701 13.096c-7.595-7.595-19.91-7.595-27.505 0s-7.595 19.91 0 27.505z");
}

.khqak-g6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.949 26.848l11.066 11.066a3.8 3.8 0 0 0 5.372 0h0a3.8 3.8 0 0 0 0-5.372l-1.44-1.44");
}
</style><path class="hsgd_gbgy"/><path class="khqak-g6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:avira-security"} {...others} />);
}

export default Component;
