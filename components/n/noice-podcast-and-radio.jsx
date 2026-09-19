import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bcmvwkbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.599 43.5a39 39 0 0 0 0-39L11.177 16.291a15.42 15.42 0 0 1 0 15.419z");
}

.i73kvxbxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.31 17.975a23.28 23.28 0 0 1-2.326 17.665M24.79 8.43a31.14 31.14 0 0 1 3.111 23.63");
}
</style><path class="bcmvwkbrb"/><path class="i73kvxbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:noice-podcast-and-radio"} {...others} />);
}

export default Component;
