import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z7lj7te8z {
  fill: currentColor;
  d: path("M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21L18 19.73L3.55 5.27zM6 5v.18L8.82 8h2.4l-.72 1.68l2.1 2.1L14.21 8H20V5z");
}
</style><path class="z7lj7te8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-format-clear"} {...others} />);
}

export default Component;
