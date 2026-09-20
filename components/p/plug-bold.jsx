import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m7_udebvo {
  fill: currentColor;
  d: path("M240.49 63.51a12 12 0 0 0-17 0L192 95l-31-31l31.52-31.51a12 12 0 0 0-17-17L144 47l-23.51-23.49a12 12 0 1 0-17 17L107 44L56.89 94.14a44 44 0 0 0 0 62.23l12.88 12.88l-46.26 46.26a12 12 0 0 0 17 17l46.26-46.26l12.88 12.88a44 44 0 0 0 62.23 0L212 149l3.51 3.52a12 12 0 0 0 17-17L209 112l31.52-31.51a12 12 0 0 0-.03-16.98m-95.6 118.63a20 20 0 0 1-28.29 0L73.86 139.4a20 20 0 0 1 0-28.29L124 61l71 71Z");
}
</style><path class="m7_udebvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:plug-bold"} {...others} />);
}

export default Component;
