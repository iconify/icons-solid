import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3vd6oblb {
  d: path("M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 10v2m12-2v2m-4-10h3m-3 4h3");
}

.s1ql6mbjf {
  stroke-opacity: 0.4;
  d: path("M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4M9 10l-3 3h4l-3 3");
}
</style><g class="nrj6p8qat"><path class="s1ql6mbjf"/><path class="p3vd6oblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:generator-duocolor-round"} {...others} />);
}

export default Component;
