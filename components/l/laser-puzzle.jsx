import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ecdqj2-zr {
  d: path("M5.5 14.75a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0m18.5 0a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0");
}

.mbkdoabfx {
  d: path("M5.5 33.25a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0");
}

.ohyog-bhe {
  d: path("M24 33.25a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0");
}

.rh_q3bwrv {
  d: path("M5.5 14.75h27.75v18.5H5.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ecdqj2-zr"/><path class="ohyog-bhe"/><path class="rh_q3bwrv"/><path class="mbkdoabfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:laser-puzzle"} {...others} />);
}

export default Component;
