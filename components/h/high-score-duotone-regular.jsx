import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq8p65fcb {
  d: path("M4 4v16h16V4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pf3d8ibrz {
  d: path("m15 7 2 -2 2 2");
}

.r182r524c {
  d: path("M7 9h10");
}

.s7u5an2xj {
  d: path("M7 17h8");
}

.xu3q-b_rm {
  fill: currentColor;
  d: path("M4 4v16h16V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zf9agzw6m {
  d: path("M7 13h7");
}
</style><g class="nrj6p8qat"><path class="xu3q-b_rm"/><path class="eq8p65fcb"/><path class="r182r524c"/><path class="zf9agzw6m"/><path class="s7u5an2xj"/><path class="pf3d8ibrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:high-score-duotone-regular"} {...others} />);
}

export default Component;
