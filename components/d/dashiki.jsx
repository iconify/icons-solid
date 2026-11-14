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

.nw1z20kkx {
  d: path("m8 7l4 5l4-5");
}

.ok4wuc4gs {
  d: path("M9.5 3a2.5 2.5 0 0 0 5 0h7v9h-4v9.5h-11V12h-4V3Z");
}
</style><g class="hntgybcog"><path class="ok4wuc4gs"/><path class="nw1z20kkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dashiki"} {...others} />);
}

export default Component;
