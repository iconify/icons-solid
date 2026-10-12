import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnpg40b2w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 16.75h7");
}

.hufrlzpcu {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.jrhd20qrl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 13.5h.01m3.49 0h.01m3.99 0h.01m3.49 0h.01");
}

.xi-q60bju {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.5h18.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="hufrlzpcu"/><path class="xi-q60bju"/><path class="jrhd20qrl"/><path class="hnpg40b2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:on-screen-keyboard"} {...others} />);
}

export default Component;
