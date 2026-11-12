import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jrgs2uprl {
  stroke-opacity: 0.4;
  d: path("M14 9h4v4m0-4l-6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w1zi5hbum {
  d: path("M3 5h18v14H3Zm3 6l2-2v6");
}
</style><g class="nrj6p8qat"><path class="jrgs2uprl"/><path class="w1zi5hbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-value-duocolor-sharp"} {...others} />);
}

export default Component;
