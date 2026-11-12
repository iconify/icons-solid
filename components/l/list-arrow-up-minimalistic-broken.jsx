import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjhjwb4fd {
  stroke-linejoin: round;
  d: path("M20 11.5L17.5 9L15 11.5M17.5 9V17");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u_o-z9bwv {
  d: path("M20 6L9.5 6M5.25 6L3 6");
}

.u-zqtib1a {
  d: path("M11 11L3 11");
}

.xvo0n--hd {
  d: path("M12 16H3");
}
</style><g class="ipq1z-bjh"><path class="u-zqtib1a"/><path class="xvo0n--hd"/><path class="hjhjwb4fd"/><path class="u_o-z9bwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-minimalistic-broken"} {...others} />);
}

export default Component;
