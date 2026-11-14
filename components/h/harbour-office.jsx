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

.rh--sebdl {
  d: path("M7.5 20.5v-5h4v5m8.5 0V3m-1.631.634l-.619.241a.939.939 0 0 0 0 1.75l.619.241A1.197 1.197 0 0 0 20 4.75a1.197 1.197 0 0 0-1.631-1.116");
}

.vqhql4zbp {
  d: path("m3.417 10.214l4.375-3.75a2.625 2.625 0 0 1 3.416 0l4.375 3.75a2.63 2.63 0 0 1 .917 1.993v5.668a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 2.5 17.875v-5.668a2.63 2.63 0 0 1 .917-1.993");
}
</style><g class="hntgybcog"><path class="vqhql4zbp"/><path class="rh--sebdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:harbour-office"} {...others} />);
}

export default Component;
