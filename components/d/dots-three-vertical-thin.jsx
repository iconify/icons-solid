import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s9gljrbck {
  fill: currentColor;
  d: path("M120 60a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 60a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="s9gljrbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-three-vertical-thin"} {...others} />);
}

export default Component;
