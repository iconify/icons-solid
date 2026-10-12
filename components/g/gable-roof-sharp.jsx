import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4sqm4byg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11h.01");
}

.esbwytbxg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15.25h12.5v6H5.75zm2.5 3h2m3.5 0h2");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yr_7-l2zf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.23 14.68l8.29-9.86l.48-.57l.48.57l8.29 9.86l.48.57H2.75z");
}
</style><g class="ux2u0rbkq"><path class="yr_7-l2zf"/><path class="a4sqm4byg"/><path class="esbwytbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gable-roof-sharp"} {...others} />);
}

export default Component;
