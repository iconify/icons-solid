import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rp48poroj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5H22v37H9.5c-2.21 0-4-1.79-4-4v-29c0-2.21 1.79-4 4-4m33 10v1.25c0 5.523-4.477 10-10 10H26V5.5h6.5c5.523 0 10 4.477 10 10M26 30.75h16.5V42.5H36c-5.523 0-10-4.477-10-10z");
}
</style><path class="rp48poroj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:retro"} {...others} />);
}

export default Component;
