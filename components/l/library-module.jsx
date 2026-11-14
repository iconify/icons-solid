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

.hw0shbbdj {
  d: path("M3 6.5v4l8 4l8-4v-4m-8 4v4m-8 0l8 4l1.213-.606M18 15v6m-3-3h6");
}

.ysn5usxho {
  d: path("m11.671 2.835l4.646 2.323a1.5 1.5 0 0 1 0 2.684l-4.646 2.323a1.5 1.5 0 0 1-1.342 0L5.683 7.842a1.5 1.5 0 0 1 0-2.684l4.646-2.323a1.5 1.5 0 0 1 1.342 0");
}
</style><g class="hntgybcog"><path class="ysn5usxho"/><path class="hw0shbbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:library-module"} {...others} />);
}

export default Component;
