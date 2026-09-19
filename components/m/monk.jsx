import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g9ci_obcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.008 30.008h-5.651l-6.365-6.365v-5.651h12.016zM17.992 17.992H5.5");
}

.r6meqn0ju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 42.5H18.23L5.5 29.77V5.5h29.928l7.072 7.072z");
}
</style><path class="r6meqn0ju"/><path class="g9ci_obcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:monk"} {...others} />);
}

export default Component;
