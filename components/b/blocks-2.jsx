import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zjw5dnjau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12L7 4C7 2.8954 7.8954 2 9 2L15 2C16.1046 2 17 2.8954 17 4L17 12M2 14C2 12.8954 2.8954 12 4 12L20 12C21.1046 12 22 12.8954 22 14L22 20C22 21.1046 21.1046 22 20 22L4 22C2.8954 22 2 21.1046 2 20L2 14ZM12 12L12 22");
}
</style><path class="zjw5dnjau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:blocks-2"} {...others} />);
}

export default Component;
