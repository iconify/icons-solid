import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6wjeybuk {
  width: 15.5px;
  height: 17.5px;
  x: 4.25px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.gw36t3b9h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 8h5m-5 4h5m-5 4h3.5");
}

.h_i28_nrz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8h.01M8 12h.01M8 16h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="d6wjeybuk"/><path class="h_i28_nrz"/><path class="gw36t3b9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:agenda-list"} {...others} />);
}

export default Component;
