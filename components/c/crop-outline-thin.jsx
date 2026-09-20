import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk-ohg6gv {
  d: path("M2 6h16v16");
}

.p7np2t4-r {
  d: path("M6 2v16h16");
}
</style><g class="hntgybcog"><path class="p7np2t4-r"/><path class="kk-ohg6gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:crop-outline-thin"} {...others} />);
}

export default Component;
