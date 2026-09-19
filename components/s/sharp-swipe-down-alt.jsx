import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cc_d-xvhw {
  fill: currentColor;
  d: path("M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4l4-4l-1.41-1.41L13 18.17z");
}
</style><path class="cc_d-xvhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-swipe-down-alt"} {...others} />);
}

export default Component;
