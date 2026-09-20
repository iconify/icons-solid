import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ygqano31y {
  fill: currentColor;
  d: path("M44 44v168h36a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8Zm172-8h-40a4 4 0 0 0 0 8h36v168h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4");
}
</style><path class="ygqano31y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:brackets-square-thin"} {...others} />);
}

export default Component;
