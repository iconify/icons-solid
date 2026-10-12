import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.njenmdbpf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 12h.01");
}

.r2hqmbbrp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 6.5h7.5a5.5 5.5 0 0 1 0 11h-7.5a5.5 5.5 0 0 1 0-11Z");
}

.ts9eagb1i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xjynbecfo {
  cx: 8.25px;
  cy: 12px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zkqnmjbsk {
  cx: 15.75px;
  cy: 12px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="r2hqmbbrp"/><circle class="xjynbecfo"/><path class="ts9eagb1i"/><circle class="zkqnmjbsk"/><path class="njenmdbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:timing-belt-sharp"} {...others} />);
}

export default Component;
