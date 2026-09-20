import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t07umx-rc {
  fill: currentColor;
  d: path("M100 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-72 52a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-72 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="t07umx-rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-six-vertical-thin"} {...others} />);
}

export default Component;
