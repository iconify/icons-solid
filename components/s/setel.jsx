import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mfvf950lk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.622L4.798 31.396h38.404zm19.202 28.774L24 45.377L4.798 31.396");
}

.wl112cq5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.594 31.392L24 45.378l-9.594-13.986L24 2.627z");
}
</style><path class="mfvf950lk"/><path class="wl112cq5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:setel"} {...others} />);
}

export default Component;
