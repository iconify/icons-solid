import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqe8f_bjb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 6.5l1.75 1.75M17.5 6.5l-1.75 1.75M6.5 17.5l1.75-1.75m9.25 1.75l-1.75-1.75");
}

.m5azbtltw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75q1.11 8.14 9.25 9.25q-8.14 1.11-9.25 9.25q-1.11-8.14-9.25-9.25q8.14-1.11 9.25-9.25Z");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="m5azbtltw"/><path class="to8m3ibcr"/><path class="jqe8f_bjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:compass-rose-sharp"} {...others} />);
}

export default Component;
