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

.w6gz7y24y {
  d: path("M3 3h18v12H3Zm4 12v6m10-6v6");
}

.yxe1yactt {
  stroke-opacity: 0.4;
  d: path("M7 7h10M7 11h6");
}
</style><g class="nrj6p8qat"><path class="yxe1yactt"/><path class="w6gz7y24y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:billboard-duocolor-sharp"} {...others} />);
}

export default Component;
