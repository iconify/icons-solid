import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjmq94baq {
  d: path("M15 11v4");
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.l3hfq7bhw {
  d: path("M9 11v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.va93cxbbs {
  fill: currentColor;
  d: path("M5 8h4V4h6v4h4v12H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xr778lbyu {
  d: path("M5 8h4V4h6v4h4v12H5Z");
}
</style><g class="s0phu2bbs"><path class="va93cxbbs"/><path class="xr778lbyu"/><path class="l3hfq7bhw"/><path class="iyj_k-bwo"/><path class="gjmq94baq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:ethernet-duotone-bold"} {...others} />);
}

export default Component;
