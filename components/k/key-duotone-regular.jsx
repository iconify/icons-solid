import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9c4ykb9u {
  d: path("M11 12h10");
}

.k-gv_lb9q {
  d: path("M3 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q2rf3qbee {
  fill: currentColor;
  d: path("M3 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.txpqn_bqw {
  d: path("M20 12v3");
}

.w4_u32yjb {
  d: path("M17 12v3");
}
</style><g class="nrj6p8qat"><path class="q2rf3qbee"/><path class="k-gv_lb9q"/><path class="g9c4ykb9u"/><path class="w4_u32yjb"/><path class="txpqn_bqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:key-duotone-regular"} {...others} />);
}

export default Component;
