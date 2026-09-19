import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rucf6bb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.5 42.5l9-9l-13-4z");
}

.uyhh_acmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.5 36.5h-19c-1.662 0-3-1.338-3-3v-25c0-1.662 1.338-3 3-3h26c1.662 0 3 1.338 3 3v19m-20 9v-27m20 7.5h-28");
}
</style><path class="uyhh_acmr"/><path class="rucf6bb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zoho-sheet"} {...others} />);
}

export default Component;
