import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ckn4tobva {
  cx: 24px;
  cy: 19.988px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gco1bibwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.5 26.25h10v11m-5-11v11m-34 0v-11h10m-5 11v-11m5 11v-26.5h19v26.5");
}

.z3h1qbb3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.094 18.877L24 21.107l2.906-2.23");
}
</style><path class="gco1bibwb"/><circle class="ckn4tobva"/><path class="z3h1qbb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:db-bahnhof-live"} {...others} />);
}

export default Component;
