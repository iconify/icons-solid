import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aamb_ippd {
  stroke-opacity: 0.4;
  d: path("M11 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.l4cebudyd {
  d: path("M5 10h14m-7 0v4l-4 6m4-6l4 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aamb_ippd"/><path class="l4cebudyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:accessibility-alt-duocolor"} {...others} />);
}

export default Component;
