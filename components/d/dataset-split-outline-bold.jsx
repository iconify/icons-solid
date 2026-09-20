import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nzatmusii {
  d: path("M6 9h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7eyaw7qq {
  d: path("M15 4v16");
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.zuuhu6bzg {
  d: path("M6 15h6");
}
</style><g class="s0phu2bbs"><path class="zrwkhybyf"/><path class="s7eyaw7qq"/><path class="nzatmusii"/><path class="wg8_ddc1f"/><path class="zuuhu6bzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:dataset-split-outline-bold"} {...others} />);
}

export default Component;
