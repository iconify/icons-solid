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

.j_24ocb4k {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.25px;
}

.ms7n3zbod {
  d: path("M6 8.5h2m2 0h2m2 0h2m-5.25 2.25h2.5q1 0 .91 1l-.82 8.5q-.09 1-1.09 1h-.5q-1 0-1.09-1l-.82-8.5q-.09-1 .91-1");
}
</style><g class="hntgybcog"><rect class="j_24ocb4k"/><path class="ms7n3zbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shotgun-mic"} {...others} />);
}

export default Component;
