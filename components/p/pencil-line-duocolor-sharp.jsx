import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvuoh6b3h {
  stroke-opacity: 0.4;
  d: path("M8 20h12");
}

.mgsswyz7g {
  d: path("M4 20v-4L16 4l4 4L8 20zm8-12l4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hvuoh6b3h"/><path class="mgsswyz7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pencil-line-duocolor-sharp"} {...others} />);
}

export default Component;
