import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgy7uubjz {
  d: path("M5 3h14l-2 18H7z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t79xm3bzn {
  stroke-opacity: 0.4;
  d: path("M6 12h12");
}
</style><g class="nrj6p8qat"><path class="t79xm3bzn"/><path class="bgy7uubjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:glass-water-duocolor-sharp"} {...others} />);
}

export default Component;
