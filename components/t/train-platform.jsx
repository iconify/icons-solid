import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b07--9b2z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15 16.75l-1 4.5m5-4.5l1 4.5m-17.25-7h7v7m-7-4h4");
}

.b9yrt_bxt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 9.5h8.5");
}

.h0qrhk1pl {
  width: 8.5px;
  height: 12.5px;
  x: 12.75px;
  y: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.urx0ynb3t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13.25h.01m3.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="h0qrhk1pl"/><path class="b9yrt_bxt"/><path class="urx0ynb3t"/><path class="b07--9b2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:train-platform"} {...others} />);
}

export default Component;
