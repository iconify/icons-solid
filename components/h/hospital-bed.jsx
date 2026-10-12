import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akzn_2afg {
  cx: 7.25px;
  cy: 11.5px;
  r: 2px;
}

.gplilobog {
  d: path("M2.75 5.5v14.75m0-4.25h18v4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tdx_tmbvg {
  d: path("M11.75 16v-4.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5V16M16 3.75v4.5M13.75 6h4.5");
}
</style><g class="hntgybcog"><path class="gplilobog"/><circle class="akzn_2afg"/><path class="tdx_tmbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hospital-bed"} {...others} />);
}

export default Component;
