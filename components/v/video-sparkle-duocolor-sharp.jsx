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

.pyg-o2byd {
  stroke-opacity: 0.4;
  d: path("M9 9c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}

.qmns5hryc {
  d: path("M3 6h12v12H3Zm12 4l6-3v10l-6-3");
}
</style><g class="nrj6p8qat"><path class="pyg-o2byd"/><path class="qmns5hryc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:video-sparkle-duocolor-sharp"} {...others} />);
}

export default Component;
