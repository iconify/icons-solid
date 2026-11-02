import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvuoh6b3h {
  stroke-opacity: 0.4;
  d: path("M8 20h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vww7afv6l {
  d: path("M4 20v-4L14 6a2.828 2.828 0 1 1 4 4L8 20zm8-12l4 4");
}
</style><g class="nrj6p8qat"><path class="hvuoh6b3h"/><path class="vww7afv6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pencil-line-duocolor-round"} {...others} />);
}

export default Component;
