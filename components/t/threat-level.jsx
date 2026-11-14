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

.i0tu4-bqh {
  d: path("M3.773 19.25a9.5 9.5 0 1 1 16.454 0M12 14.5l4.5-6");
}

.pq8rrnlbw {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-7 6.5h17");
}
</style><g class="hntgybcog"><path class="i0tu4-bqh"/><path class="pq8rrnlbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:threat-level"} {...others} />);
}

export default Component;
