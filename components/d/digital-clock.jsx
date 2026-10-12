import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axqkcccwr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.25h.01m-.01 3.5h.01");
}

.kmqvl2llc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 9H8q1 0 1 1v4q0 1-1 1H6.75q-1 0-1-1v-4q0-1 1-1M16 9h1.25q1 0 1 1v4q0 1-1 1H16q-1 0-1-1v-4q0-1 1-1");
}

.o0xk3dbag {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="o0xk3dbag"/><path class="kmqvl2llc"/><path class="axqkcccwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:digital-clock"} {...others} />);
}

export default Component;
