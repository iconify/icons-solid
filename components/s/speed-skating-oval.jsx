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

.jjctxebyq {
  d: path("M9 5.5h6a6.5 6.5 0 0 1 6.5 6.5a6.5 6.5 0 0 1-6.5 6.5H9A6.5 6.5 0 0 1 2.5 12A6.5 6.5 0 0 1 9 5.5");
}

.w4eqzub8w {
  d: path("M9 8.75h6A3.25 3.25 0 0 1 18.25 12A3.25 3.25 0 0 1 15 15.25H9A3.25 3.25 0 0 1 5.75 12A3.25 3.25 0 0 1 9 8.75");
}
</style><g class="hntgybcog"><path class="jjctxebyq"/><path class="w4eqzub8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:speed-skating-oval"} {...others} />);
}

export default Component;
