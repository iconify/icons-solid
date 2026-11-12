import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2p-_hbwz {
  d: path("M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o7vxnob1s {
  stroke-linejoin: round;
  d: path("M12 4L12 14M9 11L12 14L15 11");
}
</style><g class="ipq1z-bjh"><path class="i2p-_hbwz"/><path class="o7vxnob1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:import-linear"} {...others} />);
}

export default Component;
