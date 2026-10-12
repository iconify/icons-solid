import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ce7apzkes {
  width: 14.75px;
  height: 16.25px;
  x: 2.75px;
  y: 5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.n6p1zvb1j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.25 5h.01");
}

.roeuv6bis {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.58 9.5v4m3.34-4v4m-5.17 4.25h6.75m4-4.75h1.75a1 1 0 0 0 1-1V5");
}

.tvrf7jv8w {
  width: 10px;
  height: 5.5px;
  x: 5.25px;
  y: 8.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ce7apzkes"/><rect class="tvrf7jv8w"/><path class="roeuv6bis"/><path class="n6p1zvb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:slot-machine"} {...others} />);
}

export default Component;
