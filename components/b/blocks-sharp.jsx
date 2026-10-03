import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mp604hfeq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5L11 5L11 13L19 13L19 21L3 21L3 5ZM3 13L11 13M11 13L11 21M15 3L21 3L21 9L15 9L15 3Z");
}
</style><path class="mp604hfeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:blocks-sharp"} {...others} />);
}

export default Component;
