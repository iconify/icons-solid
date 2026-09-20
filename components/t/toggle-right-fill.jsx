import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mutmsxm1f {
  fill: currentColor;
  d: path("M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="mutmsxm1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:toggle-right-fill"} {...others} />);
}

export default Component;
