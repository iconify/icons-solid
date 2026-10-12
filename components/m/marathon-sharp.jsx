import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4oqnknem {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 6.75h.01m10.49 0h.01");
}

.f1hzpac_e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 17v-6.5L6.5 15h4m3-2.5a2 2 0 0 1 4 0c0 1.75-1.5 2.5-4 4.5h4.25");
}

.r_kv_ebvo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.75h17.5v16.5H3.25z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="r_kv_ebvo"/><path class="c4oqnknem"/><path class="f1hzpac_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:marathon-sharp"} {...others} />);
}

export default Component;
