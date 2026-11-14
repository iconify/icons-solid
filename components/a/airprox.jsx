import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_vdbvbmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.5 4.5l-7 7M3 6l4.5 1.5L9 12M2.75 9.75l1.75.75l.75 1.75M13.5 4.5l7 7M21 6l-4.5 1.5L15 12m6.25-2.25l-1.75.75l-.511 1.191M18 14.5V18m0 3h.01");
}
</style><path class="a_vdbvbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:airprox"} {...others} />);
}

export default Component;
