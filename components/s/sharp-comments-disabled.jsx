import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p33n7bgfa {
  fill: currentColor;
  d: path("M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17zM2.1 2.1L.69 3.51L2 4.83V18h13.17l5.31 5.31l1.41-1.41zM6 9h.17l2 2H6zm0 5v-2h3.17l2 2z");
}
</style><path class="p33n7bgfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-comments-disabled"} {...others} />);
}

export default Component;
