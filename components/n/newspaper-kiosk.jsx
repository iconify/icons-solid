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

.igixmxb1p {
  d: path("m2.5 7.5l19-4.75M4.5 7v14h15V3.25M4.5 14h15");
}

.k-4movitg {
  d: path("M8.5 14v-3.5l3.5 1l3.5-1V14");
}
</style><g class="hntgybcog"><path class="igixmxb1p"/><path class="k-4movitg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:newspaper-kiosk"} {...others} />);
}

export default Component;
