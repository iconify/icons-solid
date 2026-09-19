import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ufc956bzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.203 39.203c-8.398 8.398-22.008 8.398-30.406 0S.4 17.195 8.797 8.797s22.008-8.397 30.406 0");
}

.y9z42g87d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.405 11.405L24 24l8.814-8.814");
}
</style><path class="ufc956bzn"/><path class="y9z42g87d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:chrono24"} {...others} />);
}

export default Component;
