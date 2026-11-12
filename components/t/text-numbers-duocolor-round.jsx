import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2sz7swqy {
  stroke-opacity: 0.4;
  d: path("m3 15l2-2v8m4-6a2 2 0 1 1 4 0l-4 6h4m4-8h4l-3 4h1a2 2 0 1 1 0 4h-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp-f6_1yc {
  d: path("M3 3h18M3 7h10");
}
</style><g class="nrj6p8qat"><path class="d2sz7swqy"/><path class="pp-f6_1yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-numbers-duocolor-round"} {...others} />);
}

export default Component;
