import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kf8ba7uzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.352 38.048L5.5 41.229V9.952l9.852-3.181zm27.148 0l-9.852 3.181V9.952L42.5 6.771z");
}

.klolfzp2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.648 41.229l-17.296-3.181V6.771l17.296 3.181z");
}
</style><path class="kf8ba7uzv"/><path class="klolfzp2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:soundmap"} {...others} />);
}

export default Component;
