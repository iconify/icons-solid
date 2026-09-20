import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0ge12qkl {
  d: path("M12 3a9 9 0 0 1 0 18Z");
}

.i340fwbtf {
  fill: currentColor;
  d: path("M12 3a9 9 0 0 1 0 18Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
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
</style><g class="s0phu2bbs"><path class="zhy5nnbig"/><path class="i340fwbtf"/><path class="o_ssmh9ez"/><path class="d0ge12qkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:contrast-duotone-bold"} {...others} />);
}

export default Component;
