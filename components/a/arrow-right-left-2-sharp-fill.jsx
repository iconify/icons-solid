import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awy0b0rbx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 17L22 17L11.7396 17L11.0856 17M16.1938 11.7061L15.8947 12L10.8066 17L15.8947 22L16.1938 22.2939M1 7L2 7L12.2604 7L12.9144 7M7.8062 12.2939L8.1053 12L13.1934 7L8.1053 2L7.8062 1.7061");
}
</style><path class="awy0b0rbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-right-left-2-sharp-fill"} {...others} />);
}

export default Component;
