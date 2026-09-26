import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.soy-_013u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 13L18 3M21 6L18 3L15 6M13 18L3 18M6 15L3 18L6 21M3 11L3 9.6667M3 5.6667C3 4.1939 4.1939 3 5.6667 3M9.6667 3L11 3");
}
</style><path class="soy-_013u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-up-left"} {...others} />);
}

export default Component;
