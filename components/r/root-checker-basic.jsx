import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aiali7byf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 27.94l11.88 11.88L43.5 12.7M16.326 6.851v30.244M31.674 6.852v15.102m0 5.243v13.95m-20.986-9.473h11.305m5.041 0h14.114M6.852 16.326h30.415");
}
</style><path class="aiali7byf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:root-checker-basic"} {...others} />);
}

export default Component;
