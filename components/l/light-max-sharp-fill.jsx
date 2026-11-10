import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqk3sjdoz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16H17M12 11V7M6.707 11.71L4.707 9.71M17.364 11.71L19.364 9.71M19 16H23M1 16H5");
}
</style><path class="sqk3sjdoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:light-max-sharp-fill"} {...others} />);
}

export default Component;
