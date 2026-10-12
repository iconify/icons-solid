import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anc3mqbkz {
  width: 13.5px;
  height: 10.5px;
  x: 2.75px;
  y: 8.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.iopr4tvqy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 12.25h.01m3.49 0h.01m3.49 0h.01");
}

.w8nt-wy2u {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 16h7");
}

.xn3dtybmu {
  cx: 18.75px;
  cy: 5.25px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="anc3mqbkz"/><path class="iopr4tvqy"/><path class="w8nt-wy2u"/><circle class="xn3dtybmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keylogger"} {...others} />);
}

export default Component;
