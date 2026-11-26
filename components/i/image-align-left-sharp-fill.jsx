import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.m368_rb_z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 6L13 6C13.5523 6 14 6.4477 14 7L14 17C14 17.5523 13.5523 18 13 18L3 18C2.4477 18 2 17.5523 2 17L2 7C2 6.4477 2.4477 6 3 6Z");
  stroke: none;
}

.pzkmj5byd {
  d: path("M2 3L22 3M2 21L22 21");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="m368_rb_z"/><path class="pzkmj5byd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:image-align-left-sharp-fill"} {...others} />);
}

export default Component;
