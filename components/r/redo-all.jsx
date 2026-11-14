import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ca5wyj4hh {
  d: path("M16.5 9.5H9a5 5 0 0 0 0 10h4");
}

.f9m7n91js {
  d: path("m12.5 5.5l4 4l-4 4m4-8l4 4l-4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ca5wyj4hh"/><path class="f9m7n91js"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:redo-all"} {...others} />);
}

export default Component;
