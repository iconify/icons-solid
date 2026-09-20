import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1nxh3m2e {
  d: path("m9 15 5 5 5 -5");
}

.d0ex_jw9s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4h10v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g2-f5r0za {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 15 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g5tlcslpz {
  d: path("M4 4h10v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d0ex_jw9s"/><path class="g2-f5r0za"/><path class="g5tlcslpz"/><path class="c1nxh3m2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corner-right-down-duotone-bold"} {...others} />);
}

export default Component;
