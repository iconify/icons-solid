import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dtoolxbmj {
  d: path("M9.83789 14.1625L14.163 9.8374");
}

.hjuar3b7p {
  d: path("M14.1625 18.4876L13.4417 19.2085C11.053 21.5972 7.18019 21.5972 4.79151 19.2085C2.40283 16.8198 2.40283 12.947 4.79151 10.5583L5.51236 9.83746");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.urpswfa4x {
  d: path("M9.83789 5.51236L10.5587 4.79151C12.9474 2.40283 16.8202 2.40283 19.2089 4.79151C21.5976 7.18019 21.5976 11.053 19.2089 13.4417L18.4881 14.1625");
}
</style><g class="ipq1z-bjh"><path class="hjuar3b7p"/><path class="dtoolxbmj"/><path class="urpswfa4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-linear"} {...others} />);
}

export default Component;
