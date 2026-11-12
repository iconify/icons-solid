import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bozbivqdd {
  d: path("M21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pxm7_12cz {
  stroke-linejoin: round;
  d: path("M12 13V9");
}

.u8gkuv4uz {
  d: path("M10 2H14");
}
</style><g class="ipq1z-bjh"><path class="bozbivqdd"/><path class="pxm7_12cz"/><path class="u8gkuv4uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-linear"} {...others} />);
}

export default Component;
