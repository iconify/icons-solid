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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.p1gdej58i {
  d: path("M12 12L8.5 6a7 7 0 0 1 7 0Zm0 0h7a7 7 0 0 1-3.5 6Zm0 0l-3.5 6A7 7 0 0 1 5 12Z");
}
</style><g class="hntgybcog"><path class="p1gdej58i"/><path class="oy9aotbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:radiation-warning"} {...others} />);
}

export default Component;
