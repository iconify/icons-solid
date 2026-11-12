import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_hcm7xrk {
  d: path("M17 7L15 9");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n04922jxw {
  d: path("M19 5L20 4");
}

.uac092bgj {
  cx: 9.5px;
  cy: 14.5px;
  r: 7.5px;
}

.wlfsgdzfw {
  d: path("M16 3.5L16.5 4.5");
}

.zsnush0dj {
  d: path("M19.5 7.5L20.5 8");
}
</style><g class="ipq1z-bjh"><circle class="uac092bgj"/><path class="d_hcm7xrk"/><path class="zsnush0dj"/><path class="wlfsgdzfw"/><path class="n04922jxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-line-duotone"} {...others} />);
}

export default Component;
