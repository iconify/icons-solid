import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnybr2dwe {
  fill: currentColor;
  d: path("m12 4l5.5 4v11.5c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V8Zm0 2a2.25 2.25 0 0 0 0 4.5A2.25 2.25 0 0 0 12 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u0lmwrb4s {
  d: path("m13.25 6.5l2.75-4");
}
</style><g class="hntgybcog"><path class="cnybr2dwe"/><path class="u0lmwrb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:triage-black"} {...others} />);
}

export default Component;
