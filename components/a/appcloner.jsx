import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b8kl0-b-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 14.09H22a8.36 8.36 0 0 0-7.88 7.85v12m0 2v6.56m2.48-25.9l14.76 14.76M14.09 24L24 33.91m0-19.82L33.91 24");
}

.d5mvvuqoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 33.91H26a8.36 8.36 0 0 0 7.88-7.85v-12m0-2V5.5");
}
</style><path class="d5mvvuqoo"/><path class="b8kl0-b-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:appcloner"} {...others} />);
}

export default Component;
