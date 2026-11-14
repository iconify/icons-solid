import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c61gb384p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.837 11.777l8.462-6.006a1.5 1.5 0 0 1 2.331 1.556l-1.365 6.005a1.5 1.5 0 0 1-1.462 1.168H8.705a1.5 1.5 0 0 1-.868-2.723M3 17.5h18L18.5 21h-13Zm9-3v3");
}
</style><path class="c61gb384p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lateen-sail"} {...others} />);
}

export default Component;
