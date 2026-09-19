import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k7o5vnbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.849 16.303L18.84 9.369v13.868z");
}

.rqdy_8xcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.54 4.5H10.658v39h8.21V28.105h6.672c6.518 0 11.802-5.284 11.802-11.802S32.058 4.5 25.54 4.5");
}
</style><path class="rqdy_8xcz"/><path class="k7o5vnbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:t-mobile-play"} {...others} />);
}

export default Component;
