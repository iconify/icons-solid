import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o07u8dbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V3M3 3L12 12M10.5 21H13.5M21 13.5V10.5M3 17V18C3 19.6569 4.34315 21 6 21M18 21C19.6569 21 21 19.6569 21 18M17 3H18C19.6569 3 21 4.34315 21 6");
}
</style><path class="o07u8dbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-down-right-dashed-panel"} {...others} />);
}

export default Component;
