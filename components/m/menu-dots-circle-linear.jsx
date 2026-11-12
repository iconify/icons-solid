import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ijxec7fsr {
  stroke-linejoin: round;
  d: path("M8 12H8.00901M12.0045 12H12.0135M15.991 12H16");
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
</style><g class="ipq1z-bjh"><path class="ijxec7fsr"/><circle class="shu3xdl9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-circle-linear"} {...others} />);
}

export default Component;
