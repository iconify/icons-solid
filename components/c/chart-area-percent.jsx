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

.lg-8n1num {
  d: path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}

.my21nhd9n {
  d: path("M3 9.5c3.5-3 6.5 2 10-1c3-2.5 5.5-1.5 8-2");
}

.p_4ejy8rr {
  fill: currentColor;
  d: path("M3 15c3.5-2.5 6.5 2 10-1c3-2.5 5.5-1.5 8-2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="lg-8n1num"/><path class="my21nhd9n"/><path class="p_4ejy8rr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-area-percent"} {...others} />);
}

export default Component;
