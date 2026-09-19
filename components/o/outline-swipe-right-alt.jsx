import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlsp_ybkb {
  fill: currentColor;
  d: path("M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4l-4-4l-1.41 1.41L18.17 11zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3");
}
</style><path class="hlsp_ybkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-swipe-right-alt"} {...others} />);
}

export default Component;
