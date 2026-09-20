import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.e6n426but {
  fill: currentColor;
  d: path("M6 5h4v4H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g6zkfnb4p {
  d: path("M6 5h4v4H6Z");
}

.gq2c-3b3p {
  fill: currentColor;
  d: path("M14 15h4v4h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.r3l-6sbtw {
  d: path("M14 15h4v4h-4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="zhy5nnbig"/><path class="e6n426but"/><path class="gq2c-3b3p"/><path class="o_ssmh9ez"/><path class="ae-e09b3w"/><path class="g6zkfnb4p"/><path class="r3l-6sbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:world-map-duotone-bold"} {...others} />);
}

export default Component;
