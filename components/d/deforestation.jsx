import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm7getb6a {
  d: path("M5 12.5V19l-1 2h16l-1-2v-6.5");
}

.cv8uu5uva {
  d: path("M9.5 12.5a2.5 1.25 0 1 0 5 0a2.5 1.25 0 1 0-5 0M14 9.25V5.5h3V10m-1.5-4.5l4.5-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zff3-zpji {
  d: path("M5 12.5a7 3.5 0 1 0 14 0a7 3.5 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="zff3-zpji"/><path class="bm7getb6a"/><path class="cv8uu5uva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:deforestation"} {...others} />);
}

export default Component;
