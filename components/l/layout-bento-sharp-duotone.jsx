import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q12mu5ejy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 10L12 10L12 3L3 3ZM16 3L16 10L21 10L21 3L16 3ZM3 14L3 21L8 21L8 14L3 14ZM12 14L12 21L21 21L21 14L12 14Z");
}
</style><path class="q12mu5ejy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layout-bento-sharp-duotone"} {...others} />);
}

export default Component;
