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

.shpykegfv {
  d: path("M7 4h14v16H3V8h4zm0 4v12");
}

.w057zpb-p {
  stroke-opacity: 0.4;
  d: path("M11 8h6m-6 4h6m-6 4h6");
}
</style><g class="nrj6p8qat"><path class="w057zpb-p"/><path class="shpykegfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:newspaper-duocolor-sharp"} {...others} />);
}

export default Component;
