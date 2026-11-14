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

.it8gv7b4j {
  d: path("M12.09 19.526L8.5 18.5l-6 2v-15l6-2l7 2l6-2v9.571M8.5 3.5v15m7-13v6.7");
}

.rm2dge7vs {
  d: path("m16 15l-2 2.5l2 2.5m3.5-5l2 2.5l-2 2.5");
}
</style><g class="hntgybcog"><path class="it8gv7b4j"/><path class="rm2dge7vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-embed"} {...others} />);
}

export default Component;
