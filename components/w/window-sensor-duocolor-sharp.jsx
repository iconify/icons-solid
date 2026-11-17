import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eu5ifdchi {
  stroke-opacity: 0.4;
  d: path("M17 11a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8");
}

.hpwyywbvz {
  d: path("M3 11h10v10H3Zm5 0v10m-5-5h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eu5ifdchi"/><path class="hpwyywbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-sensor-duocolor-sharp"} {...others} />);
}

export default Component;
