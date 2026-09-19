import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fxev6v04x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.454 42.5h5.341v-6.15h5.142v-6.19h5.501V23.7H42.5V11.67h-5.062V5.5H26.796v6.17h-5.342V5.5H10.821v6.17H5.5V23.7h5.331v6.47h5.322v6.19h5.291z");
}
</style><path class="fxev6v04x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pixilart"} {...others} />);
}

export default Component;
