import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mrsnjbh_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.611 25.028v16.444H38.39V25.028M5.5 24l8.222-6.167V10.64l4.111-4.111l.05 8.29L24 10.282L42.5 24");
}
</style><path class="mrsnjbh_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ourflat"} {...others} />);
}

export default Component;
