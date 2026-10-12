import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k_1j21bez {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.83V3.5h5v3.33");
}

.m9me6bb5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9.5h.01");
}

.n6j4a-bkc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12.75h17.5v8.5H3.25zM7.5 17H12");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vfxp3kw4q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 12.75a7.75 6.25 0 0 1 15.5 0Z");
}

.zckadfbfg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 17h.01");
}
</style><g class="ux2u0rbkq"><path class="k_1j21bez"/><path class="vfxp3kw4q"/><path class="m9me6bb5j"/><path class="n6j4a-bkc"/><path class="zckadfbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rice-cooker-sharp"} {...others} />);
}

export default Component;
