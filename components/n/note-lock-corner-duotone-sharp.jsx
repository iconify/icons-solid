import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chfyw2b4v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v4H8v12H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.fwkt2abgq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H4V4h16v4m-7 8h8v5h-8Zm2 0v-1a2 2 0 1 1 4 0v1");
}
</style><g class="ft5dv1b6b"><path class="chfyw2b4v"/><path class="fwkt2abgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-lock-corner-duotone-sharp"} {...others} />);
}

export default Component;
