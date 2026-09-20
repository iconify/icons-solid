import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eki_s5bnj {
  d: path("m14 6 3 3 -3 3");
}

.kt3044gyi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 6 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.prbs3ccnp {
  d: path("M8 21V9h9");
}

.q30u6675d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 21V9h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="q30u6675d"/><path class="kt3044gyi"/><path class="prbs3ccnp"/><path class="eki_s5bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:turn-right-duotone-bold"} {...others} />);
}

export default Component;
