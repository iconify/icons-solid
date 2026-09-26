import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzmwhsbwv {
  stroke-opacity: 0.4;
  d: path("M6 3L6 11C6 14.3137 8.6863 17 12 17C15.3137 17 18 14.3137 18 11L18 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3af1abja {
  d: path("M3 21L21 21");
}
</style><g class="nrj6p8qat"><path class="hzmwhsbwv"/><path class="r3af1abja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:underline-duotone"} {...others} />);
}

export default Component;
