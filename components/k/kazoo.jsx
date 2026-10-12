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

.lja3qtb_a {
  d: path("m3.74 11.11l16.52 1.78q.99.11.99 1.11v1.5q0 1-.99 1.13L3.74 18.87q-.99.13-.99-.87v-6q0-1 .99-.89");
}

.ytopibb5c {
  cx: 12px;
  cy: 10px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="lja3qtb_a"/><circle class="ytopibb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kazoo"} {...others} />);
}

export default Component;
