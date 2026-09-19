import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bc-ehblzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.48 34.27a9 9 0 0 1-6.93 3.23h0a9 9 0 0 1-9-9v-8.9a9 9 0 0 1 9.05-9h0a9 9 0 0 1 7 3.26m-20.43 6.86H22.6m-11.43 6.63H22.6");
}

.p8whpqbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z");
}
</style><path class="p8whpqbas"/><path class="bc-ehblzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:symboleuro"} {...others} />);
}

export default Component;
