import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4dtx859w {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M4 21.5h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqhmx3bhr {
  d: path("M4 18.5c2-1.5 2.5-3.5 2.5-6a5.5 5.5 0 0 1 11 0c0 2.5.5 4.5 2.5 6Z");
}
</style><g class="hntgybcog"><path class="oqhmx3bhr"/><path class="g4dtx859w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:court-bell"} {...others} />);
}

export default Component;
