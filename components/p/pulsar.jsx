import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c67k2x1kl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.977 33.829A19.657 19.657 0 0 1 33.829 6.976m7.194 7.195a19.657 19.657 0 0 1-26.852 26.853M33.829 6.977l8.6-4.477m-36.858 43l8.6-4.476");
}

.c81uvk15l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.961 23.998l-13.463 7.175v-14.35z");
}
</style><path class="c81uvk15l"/><path class="c67k2x1kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pulsar"} {...others} />);
}

export default Component;
