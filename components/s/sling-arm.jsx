import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cp7ccubjp {
  d: path("M3.25 21.25v-5a5 5 0 0 1 5-5h7.5a5 5 0 0 1 5 5v5");
}

.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-jjgubpt {
  d: path("M7.25 14h9.5q1.5 0 .57 1.18l-2.89 3.64Q13.5 20 12 20h-1q-1.5 0-2.29-1.27l-2.17-3.46Q5.75 14 7.25 14m8.25 0l-1.75-2.75");
}
</style><g class="hntgybcog"><circle class="g828vzbqg"/><path class="cp7ccubjp"/><path class="p-jjgubpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sling-arm"} {...others} />);
}

export default Component;
