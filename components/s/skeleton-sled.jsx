import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9_wgoeyd {
  d: path("M2.5 16h15.75a3 3 0 0 0 0-6M6 12v4m6-4v4");
}

.pfvjdollz {
  d: path("M5 8h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="pfvjdollz"/><path class="i9_wgoeyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skeleton-sled"} {...others} />);
}

export default Component;
