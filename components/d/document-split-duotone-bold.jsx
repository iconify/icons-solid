import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp9na9-yx {
  d: path("M10 3H4v16h6");
}

.itaf_r5rq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 3H4v16h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lfxy7bcmb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 5h6v16h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vl0d0wtss {
  d: path("M14 5h6v16h-6");
}
</style><g class="s0phu2bbs"><path class="itaf_r5rq"/><path class="lfxy7bcmb"/><path class="bp9na9-yx"/><path class="vl0d0wtss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-split-duotone-bold"} {...others} />);
}

export default Component;
