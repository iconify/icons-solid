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

.usp1a9hde {
  d: path("M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5.5 9.5a7 7 0 0 1 13 0");
}

.v7jmcd5cn {
  d: path("M19.75 6.75L18.5 9.5l-2.75-1.25");
}
</style><g class="hntgybcog"><path class="usp1a9hde"/><path class="v7jmcd5cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:redox"} {...others} />);
}

export default Component;
