import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.emgvzqbpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.304 34.249L24 44.5L5.696 34.249V13.751L24 3.5l18.304 10.251z");
}

.t6r2_uw7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.221 26.715l5.21-2.865v19.211");
}
</style><path class="t6r2_uw7l"/><path class="emgvzqbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:1track"} {...others} />);
}

export default Component;
