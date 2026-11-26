import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yvd4ohx1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L13 3C14.1046 3 15 3.8954 15 5L15 8C15 8.5523 15.4477 9 16 9L19 9C20.1046 9 21 9.8954 21 11L21 19C21 20.1046 20.1046 21 19 21L11 21C9.8954 21 9 20.1046 9 19L9 16C9 15.4477 8.5523 15 8 15L5 15C3.8954 15 3 14.1046 3 13L3 5C3 3.8954 3.8954 3 5 3Z");
}
</style><path class="yvd4ohx1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:squares-unite-duotone"} {...others} />);
}

export default Component;
