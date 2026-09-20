import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cu5fjhbmy {
  d: path("M16 6v5h5");
}

.cw_3-ccnb {
  fill: currentColor;
  d: path("M3 6h13l5 5v7H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h8b2rkgcl {
  d: path("M3 6h13l5 5v7H3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qii79lbir {
  d: path("M6 14h8");
}
</style><g class="hntgybcog"><path class="cw_3-ccnb"/><path class="h8b2rkgcl"/><path class="cu5fjhbmy"/><path class="qii79lbir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:flashcard-duotone-thin"} {...others} />);
}

export default Component;
