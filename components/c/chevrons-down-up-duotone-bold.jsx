import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eev_c9mlp {
  d: path("m7 20 5 -5 5 5");
}

.iv2c1_7mk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 20 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.obc-z3jlg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 4 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p8a7rmkzk {
  d: path("m7 4 5 5 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="obc-z3jlg"/><path class="iv2c1_7mk"/><path class="p8a7rmkzk"/><path class="eev_c9mlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:chevrons-down-up-duotone-bold"} {...others} />);
}

export default Component;
