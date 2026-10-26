import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igbf_dbqo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 11L2 11ZM5.5 11L12.5 4M11.5 11L18.5 4M6 11L6 20M18 11L18 20M3 20L9 20M15 20L21 20");
}
</style><path class="igbf_dbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:construction-sharp"} {...others} />);
}

export default Component;
