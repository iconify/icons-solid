import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wbr0lgbjm {
  fill: currentColor;
  d: path("M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83zm6.09 4l-.57 1.52l1.36 1.36l.23-.66h.1l.54 1.52l3.04 3.04L13.07 6zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20z");
}
</style><path class="wbr0lgbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-font-download-off"} {...others} />);
}

export default Component;
