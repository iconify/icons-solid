import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajxy9c62r {
  d: path("M8 12L1.85791 12");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ist54rbfb {
  stroke-linejoin: round;
  d: path("M5.99954 7.8584L1.85791 12L5.99954 16.1416");
}

.ksfr8cbfi {
  d: path("M22.1422 12L12.0001 12");
}

.p1oh4ubnu {
  stroke-linejoin: round;
  d: path("M18.0005 7.8584L22.1421 12L18.0005 16.1416");
}
</style><g class="ipq1z-bjh"><path class="ksfr8cbfi"/><path class="ajxy9c62r"/><path class="ist54rbfb"/><path class="p1oh4ubnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-horizontal-broken"} {...others} />);
}

export default Component;
