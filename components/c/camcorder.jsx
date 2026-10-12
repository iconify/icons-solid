import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmmk4qvcx {
  width: 3.5px;
  height: 7.5px;
  x: 2.75px;
  y: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.ga5nngacd {
  width: 3.75px;
  height: 6px;
  x: 17.5px;
  y: 9px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.ich9ss4vh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11.5H8.5");
}

.jvvpzow5o {
  width: 9px;
  height: 10.5px;
  x: 8.5px;
  y: 6.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.nczoc976s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.5 10h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="fmmk4qvcx"/><path class="ich9ss4vh"/><rect class="jvvpzow5o"/><rect class="ga5nngacd"/><path class="nczoc976s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:camcorder"} {...others} />);
}

export default Component;
