import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gohq0pj2w {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM68 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m44 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m44 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16M76 192h104a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12m12-60h80v36H88Z");
}
</style><path class="gohq0pj2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:oven-bold"} {...others} />);
}

export default Component;
