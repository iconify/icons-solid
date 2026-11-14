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

.kn9kqgb2c {
  d: path("m15.329 8.085l3-1.5A1.5 1.5 0 0 1 20.5 7.927v10.492a1.5 1.5 0 0 1-1.026 1.423l-3 1a1.5 1.5 0 0 1-1.974-1.423V9.427a1.5 1.5 0 0 1 .829-1.342M6.25 15h5m-2-2l2 2l-2 2");
}

.yocymcccv {
  d: path("M3.5 21.5V10a5.5 5.5 0 0 1 11 0v11.5");
}
</style><g class="hntgybcog"><path class="yocymcccv"/><path class="kn9kqgb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:air-door"} {...others} />);
}

export default Component;
