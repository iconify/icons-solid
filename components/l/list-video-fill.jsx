import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ice5ohbof {
  fill: currentColor;
  d: path("M18.19907 9.40293L22.19907 12.3993C23.26698 13.19926 23.26698 14.80074 22.19907 15.6007L18.19907 18.59707C16.88045 19.58483 15 18.64393 15 16.99637L15 11.00363C15 9.35607 16.88045 8.41517 18.19907 9.40293Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w0sl_bboy {
  d: path("M2 6H16M2 12H12M2 18H12");
}
</style><g class="nrj6p8qat"><path class="ice5ohbof"/><path class="w0sl_bboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-video-fill"} {...others} />);
}

export default Component;
