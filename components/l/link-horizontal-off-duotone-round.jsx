import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2-n-e3ej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8H7a4 4 0 1 0 0 8h2m6-8h2a4 4 0 0 1 4 4c0 .85-.549 1.352-1 2M8 12h4M2 2l20 20");
}
</style><path class="v2-n-e3ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-horizontal-off-duotone-round"} {...others} />);
}

export default Component;
