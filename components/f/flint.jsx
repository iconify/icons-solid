import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fv4niac6s {
  d: path("m2.92 15.1l2.765-5.924a1.5 1.5 0 0 1 1.044-.832l5.365-1.15a1.5 1.5 0 0 1 1.485.53l2.948 3.684a1.5 1.5 0 0 1 .278 1.324l-1.561 5.854a1.5 1.5 0 0 1-1.173 1.088l-6.243 1.171a1.5 1.5 0 0 1-1.391-.471l-3.273-3.636A1.5 1.5 0 0 1 2.92 15.1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kj_dcvaoa {
  d: path("m6 8.5l4.5 5l4.5 6m1.5-13l2.5-3m.5 7L22 10");
}
</style><g class="hntgybcog"><path class="fv4niac6s"/><path class="kj_dcvaoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flint"} {...others} />);
}

export default Component;
