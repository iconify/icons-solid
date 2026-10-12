import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ackxhlb9k {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 15px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t8d_9mp8e {
  d: path("m3.64 14.52l1.32-4.54q.14-.48.28 0l1.32 4.54q.14.48.28 0l1.32-4.54q.14-.48.28 0l1.32 4.54q.14.48.28 0l1.32-4.54q.14-.48.28 0l1.32 4.54q.14.48.28 0l1.32-4.54q.14-.48.28 0l1.32 4.54q.14.48.28 0l1.32-4.54q.14-.48.28 0l1.32 4.54q.14.48-.36.48H4q-.5 0-.36-.48");
}
</style><g class="hntgybcog"><path class="t8d_9mp8e"/><rect class="ackxhlb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spike-strip"} {...others} />);
}

export default Component;
