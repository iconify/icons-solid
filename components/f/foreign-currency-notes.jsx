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

.ppes1sbho {
  d: path("M5.625 6.5h12.75A2.625 2.625 0 0 1 21 9.125v5.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 14.875v-5.75A2.625 2.625 0 0 1 5.625 6.5");
}

.rm0gdeb6q {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-3 0h.01m10.99 0h.01");
}
</style><g class="hntgybcog"><path class="ppes1sbho"/><path class="rm0gdeb6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:foreign-currency-notes"} {...others} />);
}

export default Component;
