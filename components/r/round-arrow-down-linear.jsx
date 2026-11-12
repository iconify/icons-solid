import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hxjt4vjcy {
  stroke-linejoin: round;
  d: path("M12 8L12 16M9 13L12 16L15 13");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="hxjt4vjcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-arrow-down-linear"} {...others} />);
}

export default Component;
