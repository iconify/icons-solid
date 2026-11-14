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

.qtxufeb8t {
  d: path("m7.5 15.5l5-8.5l4 8.5m-4-13q.5 1.75 2.25 2.25Q13 5.25 12.5 7q-.5-1.75-2.25-2.25Q12 4.25 12.5 2.5");
}

.tr82i4box {
  d: path("M2.5 18a9.5 2.75 0 1 0 19 0a9.5 2.75 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="tr82i4box"/><path class="qtxufeb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hero-mage"} {...others} />);
}

export default Component;
