import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oeeeuqb5z {
  fill: currentColor;
  d: path("M84 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4m132 60H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 64H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8M44 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-64a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 128a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="oeeeuqb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:list-bullets-thin"} {...others} />);
}

export default Component;
