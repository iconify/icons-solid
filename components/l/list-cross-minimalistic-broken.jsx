import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8edcu39k {
  d: path("M11 16H3");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lydqd4-wj {
  stroke-linejoin: round;
  d: path("M15 16L17.5 13.5M17.5 13.5L20 11M17.5 13.5L20 16M17.5 13.5L15 11");
}

.pre11cbbs {
  d: path("M3 6L13.5 6M17.75 6L20 6");
}

.r9km2ybri {
  d: path("M11 11L7 11M4.2 11H3");
}
</style><g class="ipq1z-bjh"><path class="pre11cbbs"/><path class="f8edcu39k"/><path class="lydqd4-wj"/><path class="r9km2ybri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-cross-minimalistic-broken"} {...others} />);
}

export default Component;
