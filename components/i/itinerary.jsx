import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o6t-k2beb {
  width: 15.5px;
  height: 18.5px;
  x: 4.25px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.ttco3ntvy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 7.25v9.5");
}

.xie25eb5k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 7.25h.01M8.25 12h.01m-.01 4.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zzr_volsu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 7.25h5m-5 4.75h5m-5 4.75h3.5");
}
</style><g class="y9tr6bcfx"><rect class="o6t-k2beb"/><path class="ttco3ntvy"/><path class="xie25eb5k"/><path class="zzr_volsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:itinerary"} {...others} />);
}

export default Component;
