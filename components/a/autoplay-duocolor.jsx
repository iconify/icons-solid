import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9i-mpbsf {
  d: path("M20 16a8.944 8.944 0 1 1 0-8m-4 0h4V4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o1978yv-q {
  stroke-opacity: 0.4;
  d: path("M10 12V8l6 4l-6 4z");
}
</style><g class="nrj6p8qat"><path class="o1978yv-q"/><path class="e9i-mpbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:autoplay-duocolor"} {...others} />);
}

export default Component;
