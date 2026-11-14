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

.mqj5mxbzq {
  d: path("M12 12s-3-2-3-3.75c0-1 .75-1.75 1.5-1.75s1.25.5 1.5 1c.25-.5.75-1 1.5-1s1.5.75 1.5 1.75C15 10 12 12 12 12");
}

.s1-zhubkj {
  d: path("M8.625 3h6.75A2.625 2.625 0 0 1 18 5.625V17.25a1.875 1.875 0 0 1-3 1.5l-1.425-1.069a2.625 2.625 0 0 0-3.15 0L9 18.75a1.875 1.875 0 0 1-3-1.5V5.625A2.625 2.625 0 0 1 8.625 3");
}
</style><g class="hntgybcog"><path class="s1-zhubkj"/><path class="mqj5mxbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bookmark-heart"} {...others} />);
}

export default Component;
