import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qh6105hpy {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-7.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.4l-1.41 1.41l-1.06-1.06l1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z");
}
</style><path class="qh6105hpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-calculate"} {...others} />);
}

export default Component;
