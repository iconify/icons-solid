import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0of5-b6k {
  d: path("M15.75 13a4 4 0 0 1 .25 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uneo4lcaa {
  d: path("M12 3s-7.25 7.5-7.25 11.25a7.25 7.25 0 0 0 14.5 0C19.25 10.5 12 3 12 3");
}
</style><g class="hntgybcog"><path class="uneo4lcaa"/><path class="h0of5-b6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fat-macro"} {...others} />);
}

export default Component;
