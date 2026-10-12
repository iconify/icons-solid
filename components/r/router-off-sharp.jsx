import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hbdewjbtf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 16.25h3");
}

.pye-g1pcr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.25h18.5v8H2.75zm4-9v9m10.5-9v9");
}

.sz6e964qg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16.25h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pye-g1pcr"/><path class="sz6e964qg"/><path class="hbdewjbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:router-off-sharp"} {...others} />);
}

export default Component;
