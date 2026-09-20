import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcbxlsosl {
  d: path("M4 6h8v6h4");
}

.pdlat6brq {
  d: path("M9 3v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.spjil5bml {
  d: path("m16 13 3 3a3 3 0 0 1 -6 0Z");
}

.z4g4wjbvf {
  d: path("M6 3h6");
}
</style><g class="s0phu2bbs"><path class="hcbxlsosl"/><path class="pdlat6brq"/><path class="z4g4wjbvf"/><path class="spjil5bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:tap-water-outline-bold"} {...others} />);
}

export default Component;
