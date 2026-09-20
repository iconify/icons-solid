import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g3dgjwbxu {
  fill: currentColor;
  d: path("M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="g3dgjwbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wifi-none-light"} {...others} />);
}

export default Component;
