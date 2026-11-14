import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q6lf2ob7e {
  d: path("M5.75 11V7.75H9m6.625 6.75h3.25a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 13 18.875v-1.75a2.625 2.625 0 0 1 2.625-2.625m-.375 0V12a2.25 2.25 0 0 1 4.5-.5");
}

.wzzibubvr {
  d: path("M10.25 18.5H4.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v1");
}
</style><g class="hntgybcog"><path class="wzzibubvr"/><path class="q6lf2ob7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aspect-ratio-unlock"} {...others} />);
}

export default Component;
