import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czulu5orc {
  d: path("M2.5 6q9.5 4 19 0v12q-9.5-4-19 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r1a8-rxeo {
  d: path("M2.5 15L8 10.5l4 3l3.5-2.5l6 4.5");
}
</style><g class="hntgybcog"><path class="czulu5orc"/><path class="r1a8-rxeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:landscape-view"} {...others} />);
}

export default Component;
