import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.se88_8bar {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 2.7071L12 8L17.2929 2.7071M6.7071 9.2071L12 14.5L17.2929 9.2071M6.7071 15.7071L12 21L17.2929 15.7071");
}
</style><path class="se88_8bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-down-3-sharp-two-tone"} {...others} />);
}

export default Component;
