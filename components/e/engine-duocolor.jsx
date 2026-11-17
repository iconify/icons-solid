import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfhi724mx {
  stroke-opacity: 0.4;
  d: path("M9 4h4m-2 0v4m-8 3v4m0-2h3");
}

.hmokqju-s {
  d: path("M21 14v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-3l-2-4H7a1 1 0 0 1-1-1v-4l3-3h4l2 4h2a1 1 0 0 0 1-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dfhi724mx"/><path class="hmokqju-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:engine-duocolor"} {...others} />);
}

export default Component;
