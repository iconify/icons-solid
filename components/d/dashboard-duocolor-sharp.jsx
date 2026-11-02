import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p6ibbnhnw {
  d: path("M4 4h6v8H4Zm0 12h6v4H4Zm10-4h6v8h-6Z");
}

.w3v_8-sey {
  stroke-opacity: 0.4;
  d: path("M14 4h6v4h-6Z");
}
</style><g class="nrj6p8qat"><path class="w3v_8-sey"/><path class="p6ibbnhnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dashboard-duocolor-sharp"} {...others} />);
}

export default Component;
