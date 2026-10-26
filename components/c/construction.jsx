import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7_9a6blz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L20 4C21.1046 4 22 4.8954 22 6L22 9C22 10.1046 21.1046 11 20 11L4 11C2.8954 11 2 10.1046 2 9L2 6C2 4.8954 2.8954 4 4 4ZM5.5 11L12.5 4M11.5 11L18.5 4M6 11L6 20M18 11L18 20M4 20L8 20M16 20L20 20");
}
</style><path class="s7_9a6blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:construction"} {...others} />);
}

export default Component;
