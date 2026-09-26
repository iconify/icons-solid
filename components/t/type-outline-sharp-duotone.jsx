import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nsf_qtbke {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L22 3L22 11L18 11L18 7L14 7L14 17L18 17L18 21L6 21L6 17L10 17L10 7L6 7L6 11L2 11L2 3Z");
}
</style><path class="nsf_qtbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-outline-sharp-duotone"} {...others} />);
}

export default Component;
