import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vy8a7qbyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 22H3C2.448 22 2 21.552 2 21V7L11.544 2.11C11.83 1.963 12.17 1.963 12.456 2.11L22 7V21C22 21.552 21.552 22 21 22H18M18 22V12C18 11.448 17.552 11 17 11H7C6.448 11 6 11.448 6 12V22M18 22H6M22 7H2M11 18H13");
}
</style><path class="vy8a7qbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:garage"} {...others} />);
}

export default Component;
