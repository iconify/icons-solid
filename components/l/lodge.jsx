import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.autnc1o3q {
  d: path("M2.5 11.5L12 4l9.5 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wh6luetrn {
  d: path("M5 10v10h14V10M5 13.5h14M5 16.75h14M16.5 3.5v4");
}
</style><g class="hntgybcog"><path class="autnc1o3q"/><path class="wh6luetrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lodge"} {...others} />);
}

export default Component;
