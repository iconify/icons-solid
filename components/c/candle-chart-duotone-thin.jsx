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

.ltupbjb0d {
  d: path("M5 10.5V13m-2 0h4v5H3Zm2 5v2.5m7 -14V9m-2 0h4v5h-4Zm2 5v2.5m7 -14V5m-2 0h4v5h-4Zm2 5v2.5");
}

.rfmmsacss {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 10.5V13m-2 0h4v5H3Zm2 5v2.5m7 -14V9m-2 0h4v5h-4Zm2 5v2.5m7 -14V5m-2 0h4v5h-4Zm2 5v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="rfmmsacss"/><path class="ltupbjb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:candle-chart-duotone-thin"} {...others} />);
}

export default Component;
