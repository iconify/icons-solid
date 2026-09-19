import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wrapxq9tj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 4.5v3H12v30h4.5v6h6v-3h-2v-3H28v6h6v-3h-2v-3h4V32H23V20h13V7.5h-5v-3h-3v3h-7.5v-3zm17.375 17V20m-3.25 1.5V20m-3.25 1.5V20m-3.25 1.5V20m9.75 12v-1.5m-3.25 1.5v-1.5m-3.25 1.5v-1.5m-3.25 1.5v-1.5");
}
</style><path class="wrapxq9tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:au-digira"} {...others} />);
}

export default Component;
