import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aej0b95ng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.313 11.813H43.5V24a12.19 12.19 0 0 1-12.187 12.188A12.19 12.19 0 0 1 19.124 24a12.19 12.19 0 0 1 12.188-12.187");
}

.xfnmmy-sw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.688 36.188H4.5V24a12.19 12.19 0 0 1 12.188-12.187A12.19 12.19 0 0 1 28.874 24a12.19 12.19 0 0 1-12.187 12.188");
}
</style><path class="aej0b95ng"/><path class="xfnmmy-sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tandem"} {...others} />);
}

export default Component;
