import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqxgvlapa {
  d: path("m15.75 15.75l5.5 5.5m-14.5-8.5L9.25 10l2 1.75l3.25-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n6dwwqesf {
  cx: 10.5px;
  cy: 10.5px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="n6dwwqesf"/><path class="dqxgvlapa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-zoom"} {...others} />);
}

export default Component;
