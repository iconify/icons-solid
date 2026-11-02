import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-31ttcxg {
  stroke-opacity: 0.4;
  d: path("m11 13l3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xprgi_oxb {
  d: path("M21 3L3 9l8 4l4 8z");
}
</style><g class="nrj6p8qat"><path class="n-31ttcxg"/><path class="xprgi_oxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paper-plane-duocolor-sharp"} {...others} />);
}

export default Component;
