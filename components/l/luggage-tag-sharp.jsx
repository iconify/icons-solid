import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9me6bb5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9.5h.01");
}

.o_peh6bae {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.18 5.67l3.39 2.66l1.18.92v12H6.25v-12l1.18-.92l3.39-2.66L12 4.75z");
}

.un-laqb0a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5c-1.5-3.5-3.5-6-7.5-6.75M9.25 14h5.5m-5.5 3.25h3.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="o_peh6bae"/><path class="m9me6bb5j"/><path class="un-laqb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:luggage-tag-sharp"} {...others} />);
}

export default Component;
