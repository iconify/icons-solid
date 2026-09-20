import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oi40jf9zq {
  d: path("M7.5 15v-2.5H10");
}

.wm0jgrm5t {
  d: path("M16.5 9v2.5H14");
}

.wy-6ptr_q {
  d: path("m11 16 -3 -3");
}

.x1wxn1ypz {
  d: path("m13 8 3 3");
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="nrj6p8qat"><path class="h7k_twb0c"/><path class="x1wxn1ypz"/><path class="wm0jgrm5t"/><path class="wy-6ptr_q"/><path class="oi40jf9zq"/><path class="xb0ugqbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:agent-negotiation-outline-regular"} {...others} />);
}

export default Component;
