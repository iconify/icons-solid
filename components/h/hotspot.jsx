import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iu76q6a5g {
  fill: currentColor;
  d: path("M10.25 16.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.kjwcs4b9n {
  d: path("M2.603 13.08a10 10 0 0 1 18.794 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z73ri-cxq {
  d: path("M7.302 14.79a5 5 0 0 1 9.396 0");
}
</style><g class="ulnmmdpxh"><path class="z73ri-cxq"/><path class="kjwcs4b9n"/><path class="iu76q6a5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hotspot"} {...others} />);
}

export default Component;
