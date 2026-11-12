import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlvrsbb4j {
  d: path("M12 4C7.58172 4 4 7.58172 4 12M5.75463 17C7.22075 18.8289 9.47362 20 12 20");
}

.xm0m6vgjk {
  stroke-linejoin: round;
  d: path("M10 12H20M17 15L20 12L17 9");
}
</style><g class="ipq1z-bjh"><path class="xm0m6vgjk"/><path class="vlvrsbb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-broken"} {...others} />);
}

export default Component;
