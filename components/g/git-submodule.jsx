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

.xuuapd7wd {
  d: path("M2.5 11a2 2 0 0 1 2-2H8l2 2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2Z");
}

.znzywcclp {
  d: path("M6 6.25V5a2 2 0 0 1 2-2h3.5l2 2h6a2 2 0 0 1 2 2v10m-13-1.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-3.25 0H8.5m3.5 0h3.25");
}
</style><g class="hntgybcog"><path class="xuuapd7wd"/><path class="znzywcclp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:git-submodule"} {...others} />);
}

export default Component;
