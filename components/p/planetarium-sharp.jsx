import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ald18pbar {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 21.25v-3.5h3v3.5");
}

.dpvempfvy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 5.5h.01M20 5.5h.01M12 3h.01");
}

.njigveb_h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 13.75a6.75 6.75 0 0 1 13.5 0Zm-2 0h17.5v7.5H3.25z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="njigveb_h"/><path class="ald18pbar"/><path class="dpvempfvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:planetarium-sharp"} {...others} />);
}

export default Component;
