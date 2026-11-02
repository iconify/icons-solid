import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lueqmvvgx {
  d: path("m16 7l3 3c.64.64 1 1.72 1 3v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4c0-1.28.36-2.36 1-3l4-4a4.243 4.243 0 0 1 6 0z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pane80bkq {
  stroke-opacity: 0.4;
  d: path("m10 12l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="pane80bkq"/><path class="lueqmvvgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-close-duocolor-round"} {...others} />);
}

export default Component;
