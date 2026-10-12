import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ck0l6ac6l {
  d: path("m7 16.5l3.5-3.75l3 2.25l3.25-3.75m.75-1s-3.25-1.9-3.25-4.1a1.6 1.6 0 0 1 3.25-.6a1.6 1.6 0 0 1 3.25.6c0 2.2-3.25 4.1-3.25 4.1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xf157hbul {
  d: path("M2.75 2.75v15.5a3 3 0 0 0 3 3h15.5");
}
</style><g class="hntgybcog"><path class="xf157hbul"/><path class="ck0l6ac6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:engagement-chart"} {...others} />);
}

export default Component;
