import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l1568sbha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.964 40.536L24 44.5l-6.004-6.004H9.504v-8.492L3.5 24l6.004-6.004V9.504h8.492L24 3.5l6.004 6.004h8.492v8.492L44.5 24l-3.011 3.012");
}

.s7ow_bkxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.808 36.765a7.727 7.727 0 1 1 6.706 3.886l-12.038-.163a4.636 4.636 0 0 1 0-9.272l4.506-.014m-8.918-11.615h6.216a6.25 6.25 0 0 1-6.095 6.397q-.06.002-.121.002a6.4 6.4 0 0 1 0-12.799a6.3 6.3 0 0 1 3.173.842");
}
</style><path class="l1568sbha"/><path class="s7ow_bkxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-weather"} {...others} />);
}

export default Component;
