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

.kqchwwgaj {
  d: path("M4 9.5h3.5l3 3V20A1.5 1.5 0 0 1 9 21.5H4A1.5 1.5 0 0 1 2.5 20v-9A1.5 1.5 0 0 1 4 9.5m12.125 0h2.75a2.625 2.625 0 0 1 2.625 2.625v6.75a2.625 2.625 0 0 1-2.625 2.625h-2.75a2.625 2.625 0 0 1-2.625-2.625v-6.75A2.625 2.625 0 0 1 16.125 9.5");
}

.y8-m75byh {
  d: path("M14.75 6.5h2.75V3.75");
}

.zb9t40sos {
  d: path("M7.5 9.5v3h3m-4-6q5.5-6 11 0");
}
</style><g class="hntgybcog"><path class="kqchwwgaj"/><path class="zb9t40sos"/><path class="y8-m75byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:opening-balance"} {...others} />);
}

export default Component;
