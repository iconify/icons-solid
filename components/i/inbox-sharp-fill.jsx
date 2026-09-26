import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hk6abm7ns {
  fill: currentColor;
  d: path("M2 13L8 13L10 16L14 16L16 13L22 13L22 19C22 19.5523 21.5523 20 21 20L3 20C2.4477 20 2 19.5523 2 19L2 13Z");
  stroke: none;
}

.tkp_8ackj {
  d: path("M7 4L17 4L22 12.1534L22 20L2 20L2 12.1534L7 4ZM2 13L8 13L10 16L14 16L16 13L22 13");
}
</style><g class="gp_8x1bzb"><path class="hk6abm7ns"/><path class="tkp_8ackj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:inbox-sharp-fill"} {...others} />);
}

export default Component;
