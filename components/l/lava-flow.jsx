import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2gp2ek2z {
  d: path("M10.5 8c0 3.5-2 4.5-2 7.5c0 2.5-2 3.5-2.5 5h12c-.5-1.5-2.5-2.5-2.5-5c0-3-2-4-2-7.5M9 5a1.5 1.5 0 0 1 3-1a1.5 1.5 0 0 1 3 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.janwq29et {
  d: path("M2.5 20.5L9 8h6l6.5 12.5");
}
</style><g class="hntgybcog"><path class="janwq29et"/><path class="a2gp2ek2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lava-flow"} {...others} />);
}

export default Component;
