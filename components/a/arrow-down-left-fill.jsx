import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ttf9jybfx {
  fill: currentColor;
  d: path("M197.66 69.66L127.31 140l46.35 46.34A8 8 0 0 1 168 200H64a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66L116 128.69l70.34-70.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="ttf9jybfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-down-left-fill"} {...others} />);
}

export default Component;
