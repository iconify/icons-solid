import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9o0xgbiy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.5c0 1.5 1.8 2.75 4 2.75s4-1.25 4-2.75m-8 6c0 1.5 1.8 2.75 4 2.75s4-1.25 4-2.75m6-.75l3 1.25v3.5c0 2.75-1.25 4.75-3 5.75c-1.75-1-3-3-3-5.75V12Z");
}

.qfpm0dj-f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.5c0-1.5 1.8-2.75 4-2.75s4 1.25 4 2.75v13c0 1.5-1.8 2.75-4 2.75s-4-1.25-4-2.75Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zex9bdc-s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 15.25h.01");
}
</style><g class="ux2u0rbkq"><path class="qfpm0dj-f"/><path class="m9o0xgbiy"/><path class="zex9bdc-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:data-loss-prevent-sharp"} {...others} />);
}

export default Component;
