import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nedp8zb0g {
  d: path("M3 11h12v5H3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rqyts8bos {
  stroke-opacity: 0.4;
  d: path("m15 11l6-3");
}
</style><g class="nrj6p8qat"><path class="rqyts8bos"/><path class="nedp8zb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frying-pan-duocolor-sharp"} {...others} />);
}

export default Component;
