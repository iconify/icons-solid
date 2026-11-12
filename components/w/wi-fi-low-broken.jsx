import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iejxo-b0t {
  d: path("M13.376 14.623C14.0924 14.8582 14.7672 15.2815 15.3337 15.8929");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pn5tqtb4p {
  d: path("M8.66699 15.893C9.2104 15.3065 9.85347 14.8931 10.5374 14.6528");
}

.zj2p4py0y {
  stroke-linejoin: round;
  d: path("M12.0176 19.4644H12.0177");
}
</style><g class="ipq1z-bjh"><path class="zj2p4py0y"/><path class="pn5tqtb4p"/><path class="iejxo-b0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-low-broken"} {...others} />);
}

export default Component;
