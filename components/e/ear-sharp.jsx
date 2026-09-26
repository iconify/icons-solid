import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fuah0ubun {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 10L5 9C5 5.134 8.134 2 12 2C15.866 2 19 5.134 19 9C19 13.4936 15.4839 12.0806 14 19.5C13.5 22 11.821 22 11 22C9.3431 22 8 20.6569 8 19L8 18M14.5 10L14.5 9C14.5 7.6193 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.6193 9.5 9L9.5 11L9.5 12");
}
</style><path class="fuah0ubun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ear-sharp"} {...others} />);
}

export default Component;
