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

.jx9zjv41k {
  fill: currentColor;
  d: path("M5.125 5.5h1.25A2.625 2.625 0 0 1 9 8.125v7.75A2.625 2.625 0 0 1 6.375 18.5h-1.25A2.625 2.625 0 0 1 2.5 15.875v-7.75A2.625 2.625 0 0 1 5.125 5.5");
}

.lgb8h7bmj {
  d: path("M17.625 5.5h1.25A2.625 2.625 0 0 1 21.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-1.25A2.625 2.625 0 0 1 15 15.875v-7.75A2.625 2.625 0 0 1 17.625 5.5M12 5.5v2m0 3.5v2m0 3.5v2");
}
</style><g class="hntgybcog"><path class="jx9zjv41k"/><path class="lgb8h7bmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ab-test-model"} {...others} />);
}

export default Component;
