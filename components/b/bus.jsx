import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9hevxmdt {
  width: 9.5px;
  height: 5px;
  x: 7.25px;
  y: 5.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.ggm9aybmm {
  width: 14.5px;
  height: 15.5px;
  x: 4.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.jwm0iccwr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 14.75h.01m7.99 0h.01");
}

.o2w7ron4a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 18.25V21m8.5-2.75V21");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ggm9aybmm"/><rect class="e9hevxmdt"/><path class="jwm0iccwr"/><path class="o2w7ron4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bus"} {...others} />);
}

export default Component;
