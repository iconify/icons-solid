import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hq9titsaw {
  stroke-opacity: 0.4;
  d: path("M8 12h.01M11 10a3.61 3.61 0 0 1 0 4m3-6a7.21 7.21 0 0 1 0 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}
</style><g class="nrj6p8qat"><path class="hq9titsaw"/><path class="r21jxhxfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-contactless-duocolor-sharp"} {...others} />);
}

export default Component;
