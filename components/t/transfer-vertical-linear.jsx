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

.qkmssf62n {
  d: path("M10 4L10 20L4 14.5");
}

.v5zr4wbeq {
  d: path("M14 20L14 4L20 9.5");
}
</style><g class="hntgybcog"><path class="qkmssf62n"/><path class="v5zr4wbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-linear"} {...others} />);
}

export default Component;
