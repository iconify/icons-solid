import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fjelj-byq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.74 30.7L6.5 42.43L24 5.57m4.26 25.13L41.5 42.43L24 5.57");
}

.zy6sgn2pa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.74 30.7h8.52L24 5.57Z");
}
</style><path class="fjelj-byq"/><path class="zy6sgn2pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dronecast"} {...others} />);
}

export default Component;
