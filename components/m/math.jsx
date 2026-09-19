import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f0my4_bob {
  width: 37px;
  height: 23px;
  x: 5.5px;
  y: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.nafvp4bps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.13 21.97l-4.94 6.55m4.94 0l-4.94-6.55M31.45 19h-8.11l-3.88 10l-2.91-7.03");
}
</style><rect class="f0my4_bob"/><rect transform="rotate(90 24 24)" class="f0my4_bob"/><path class="nafvp4bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:math"} {...others} />);
}

export default Component;
