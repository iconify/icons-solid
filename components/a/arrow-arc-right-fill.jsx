import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b2bwh9zds {
  fill: currentColor;
  d: path("M240 88v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66l26.19-26.18A88 88 0 0 0 40 184a8 8 0 0 1-16 0a104 104 0 0 1 175.86-75.18l26.48-26.48A8 8 0 0 1 240 88");
}
</style><path class="b2bwh9zds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-arc-right-fill"} {...others} />);
}

export default Component;
