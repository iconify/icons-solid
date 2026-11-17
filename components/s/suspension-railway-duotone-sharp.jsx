import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewylibb5k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20V9h14l4 4v7zm0-4h18M11 9v7M3 4h18M7 4v5m8-5v5");
}

.ft5dv1b6b {
  fill: none;
}

.ue8xubbqq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 9h14l4 4v7H3Z");
}
</style><g class="ft5dv1b6b"><path class="ue8xubbqq"/><path class="ewylibb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:suspension-railway-duotone-sharp"} {...others} />);
}

export default Component;
