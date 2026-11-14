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

.juc500b-p {
  d: path("M7.75 2.5h.5a5.25 5.25 0 0 1 5.25 5.25v.5a5.25 5.25 0 0 1-5.25 5.25h-.5A5.25 5.25 0 0 1 2.5 8.25v-.5A5.25 5.25 0 0 1 7.75 2.5M13.5 7c5.5 0 8 3.5 8 9v5.5h-4V20h1v-4c0-4-2-6-5-6");
}

.vytdnbbtp {
  d: path("M6 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12.25 5.5h3.25m-3 3.5h3");
}
</style><g class="hntgybcog"><path class="juc500b-p"/><path class="vytdnbbtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:body-measurements"} {...others} />);
}

export default Component;
