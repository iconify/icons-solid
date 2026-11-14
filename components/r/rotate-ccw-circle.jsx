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

.o6e5k7b8u {
  d: path("M12 8.25a4.5 4.5 0 1 1-3.897 2.25");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.s1gutd67h {
  d: path("m14 6.25l-2 2l2 2");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="o6e5k7b8u"/><path class="s1gutd67h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rotate-ccw-circle"} {...others} />);
}

export default Component;
