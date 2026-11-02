import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blebsvbka {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12v7H3v-7Zm13 0v7h-5v-7Z");
}

.ft5dv1b6b {
  fill: none;
}

.t6gfjibgj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12a7 7 0 0 1 14 0M3 12h5v7H3Zm13 0h5v7h-5Z");
}
</style><g class="ft5dv1b6b"><path class="blebsvbka"/><path class="t6gfjibgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:headphones-duotone-sharp"} {...others} />);
}

export default Component;
