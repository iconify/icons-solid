import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk_53rbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6L15 6C16.1046 6 17 6.8954 17 8L17 16C17 17.1046 16.1046 18 15 18L4 18C2.8954 18 2 17.1046 2 16L2 8C2 6.8954 2.8954 6 4 6ZM17 10L20.5528 8.2236C21.2177 7.8912 22 8.3747 22 9.118L22 14.882C22 15.6253 21.2177 16.1088 20.5528 15.7764L17 14");
}
</style><path class="vk_53rbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:video-2"} {...others} />);
}

export default Component;
