import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_5jj1b6v {
  cx: 8px;
  cy: 8px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgwm6qb8a {
  d: path("M8 5.25v-2.5M5.25 8h-2.5m3.31 1.94l-2.31 2.31m6.19-2.31L17 17m0 0l4.25 1.25M17 17l1.25 4.25");
}
</style><g class="hntgybcog"><circle class="d_5jj1b6v"/><path class="vgwm6qb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nerve-cell"} {...others} />);
}

export default Component;
