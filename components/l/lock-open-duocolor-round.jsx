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

.o8oe9qx1s {
  d: path("M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm7 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.smd2290dp {
  stroke-opacity: 0.4;
  d: path("M8 9V7a4 4 0 0 1 7.464-2");
}
</style><g class="nrj6p8qat"><path class="smd2290dp"/><path class="o8oe9qx1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-open-duocolor-round"} {...others} />);
}

export default Component;
