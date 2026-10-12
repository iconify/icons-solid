import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1_x4r67w {
  cx: 4.75px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o94j0nnsa {
  d: path("m13.09 9.76l-3.28 3.93q-.26.31.14.31h.3q.4 0 .4.4v2.75q0 .4.23.07l3.39-4.74q.23-.33-.17-.33h-.35q-.4 0-.4-.4v-1.9q0-.4-.26-.09");
}

.rf72_lb5i {
  cx: 12px;
  cy: 13.5px;
  r: 7px;
}

.wft9rcgmo {
  cx: 19.25px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="rf72_lb5i"/><circle class="e1_x4r67w"/><circle class="wft9rcgmo"/><path class="o94j0nnsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:alternator"} {...others} />);
}

export default Component;
