import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjlkcc9dp {
  cx: 12px;
  cy: 11.25px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lgzx_1ilx {
  d: path("M7.25 21.25h9.5a.75.75 0 0 0 .75-.75c0-2.25-2.53-3.75-5.5-3.75s-5.5 1.5-5.5 3.75a.75.75 0 0 0 .75.75M8.5 5.5L12 2.75l3.5 2.75");
}
</style><g class="hntgybcog"><circle class="hjlkcc9dp"/><path class="lgzx_1ilx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:promotion"} {...others} />);
}

export default Component;
