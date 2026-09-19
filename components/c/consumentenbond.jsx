import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r_g9gkb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.477 35.485L42.762 16.55c1.641-1.797.366-4.687-2.067-4.687H7.305c-2.433 0-3.708 2.89-2.067 4.687l17.285 18.934a2 2 0 0 0 2.954 0");
}
</style><path class="r_g9gkb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:consumentenbond"} {...others} />);
}

export default Component;
