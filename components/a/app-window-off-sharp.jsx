import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnt5uobwy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 7C16 7.5523 15.552 8 15 8C14.448 8 14 7.5523 14 7C14 6.4477 14.448 6 15 6C15.552 6 16 6.4477 16 7Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jdrtvi72o {
  d: path("M7.657 3H8.657H21V15.3431V16.3431M21 21H3V3M1.707 1.7071L22.293 22.293");
}
</style><g class="gp_8x1bzb"><path class="jdrtvi72o"/><path clip-rule="evenodd" class="dnt5uobwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:app-window-off-sharp"} {...others} />);
}

export default Component;
