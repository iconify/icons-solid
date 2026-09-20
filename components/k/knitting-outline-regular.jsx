import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlzio5mhn {
  d: path("m13 12 8 -8");
}

.mui_mi4_l {
  d: path("M5 13c3 2 5 4 6 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p5ke0gb-n {
  d: path("M3 15a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.vnfd-sbai {
  d: path("m16 15 5 -5");
}
</style><g class="nrj6p8qat"><path class="p5ke0gb-n"/><path class="hlzio5mhn"/><path class="vnfd-sbai"/><path class="mui_mi4_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:knitting-outline-regular"} {...others} />);
}

export default Component;
