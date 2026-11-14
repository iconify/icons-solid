import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dygb1iwwr {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pwqzbmptn {
  d: path("m12.819 2.933l6.75 3.574a1.75 1.75 0 0 1 .931 1.547v7.892a1.75 1.75 0 0 1-.931 1.547l-6.75 3.574a1.75 1.75 0 0 1-1.638 0l-6.75-3.574a1.75 1.75 0 0 1-.931-1.547V8.054a1.75 1.75 0 0 1 .931-1.547l6.75-3.574a1.75 1.75 0 0 1 1.638 0");
}
</style><g class="hntgybcog"><path class="pwqzbmptn"/><path class="dygb1iwwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:model-3d-science"} {...others} />);
}

export default Component;
