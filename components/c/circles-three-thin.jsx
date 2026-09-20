import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.do9e5lbaw {
  fill: currentColor;
  d: path("M168 76a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-40 32a32 32 0 1 1 32-32a32 32 0 0 1-32 32m60 24a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32M68 132a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32");
}
</style><path class="do9e5lbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circles-three-thin"} {...others} />);
}

export default Component;
