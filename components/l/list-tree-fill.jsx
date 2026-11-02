import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yv8x6kb1h {
  fill: currentColor;
  d: path("M5 6v5h3a1 1 0 0 1 0 2H5v3a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V6a1 1 0 0 1 2 0m3-1h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m4 6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m0 6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="yv8x6kb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-tree-fill"} {...others} />);
}

export default Component;
