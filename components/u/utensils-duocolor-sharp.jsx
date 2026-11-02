import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2aaagc1d {
  stroke-opacity: 0.4;
  d: path("M3 3v8h8V3M7 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ukvtomm3d {
  d: path("M21 14V3a5 5 0 0 0-5 5v6zm0 0v7");
}
</style><g class="nrj6p8qat"><path class="b2aaagc1d"/><path class="ukvtomm3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:utensils-duocolor-sharp"} {...others} />);
}

export default Component;
