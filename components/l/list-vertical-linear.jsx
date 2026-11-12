import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fvnj3qbjd {
  d: path("M4 17H11");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh_4bzbdf {
  d: path("M4 12L11 12");
}

.o2bnwltsv {
  d: path("M4 7L11 7");
}

.r9gp_ab3d {
  stroke-linejoin: round;
  d: path("M17 4L17 20M20 8L17 4L14 8M14 16L17 20L20 16");
}
</style><g class="ipq1z-bjh"><path class="fvnj3qbjd"/><path class="kh_4bzbdf"/><path class="o2bnwltsv"/><path class="r9gp_ab3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-vertical-linear"} {...others} />);
}

export default Component;
