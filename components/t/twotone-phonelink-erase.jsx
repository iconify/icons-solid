import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wv3-n4qgs {
  fill: currentColor;
  d: path("m4 17.2l4-4l4 4l1-1l-4-4l4-4l-1-1l-4 4l-4-4l-1 1l4 4l-4 4zM9 23h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2");
}
</style><path class="wv3-n4qgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-phonelink-erase"} {...others} />);
}

export default Component;
