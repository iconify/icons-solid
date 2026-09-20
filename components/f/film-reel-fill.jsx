import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ha_l9fi1b {
  fill: currentColor;
  d: path("M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M80 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-96a20 20 0 1 1 20-20a20 20 0 0 1-20 20m28 28a20 20 0 1 1 20 20a20 20 0 0 1-20-20");
}
</style><path class="ha_l9fi1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:film-reel-fill"} {...others} />);
}

export default Component;
