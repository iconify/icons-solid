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

.n236x20gn {
  d: path("M15.5 7.75L12 12L9 9.5");
}

.tsw0sz4ml {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 5.25v2M16.75 12h2M12 16.75v2M5.25 12h2");
}
</style><g class="hntgybcog"><path class="tsw0sz4ml"/><path class="n236x20gn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clock-learning"} {...others} />);
}

export default Component;
