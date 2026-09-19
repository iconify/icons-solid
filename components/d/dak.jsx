import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v9o23yb2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 19.497L24 5.987L5.5 19.497m33.105 5.477v15.592a1.447 1.447 0 0 1-1.447 1.447H10.842a1.447 1.447 0 0 1-1.447-1.447V24.974");
}
</style><path class="v9o23yb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dak"} {...others} />);
}

export default Component;
