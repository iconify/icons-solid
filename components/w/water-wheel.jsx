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

.o9g12ssnz {
  d: path("M10 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h5m-9 0H5m8 1.75l2.5 4.25M11 7.75L8.5 3.5m2.5 7.75L8.5 15.5M13 7.75l2.5-4.25M3 20.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}

.trxlteb6d {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="trxlteb6d"/><path class="o9g12ssnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-wheel"} {...others} />);
}

export default Component;
