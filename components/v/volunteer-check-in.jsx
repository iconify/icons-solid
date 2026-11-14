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

.tqse4rb6g {
  d: path("M10.5 2.5h3a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2a2 2 0 0 1 2-2M8 13.5l3 3l5.5-6");
}

.tumjq_v3r {
  d: path("M8.375 4.5h7.25A4.375 4.375 0 0 1 20 8.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-7.25A4.375 4.375 0 0 1 4 17.125v-8.25A4.375 4.375 0 0 1 8.375 4.5");
}
</style><g class="hntgybcog"><path class="tumjq_v3r"/><path class="tqse4rb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:volunteer-check-in"} {...others} />);
}

export default Component;
