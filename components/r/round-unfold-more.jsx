import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9w2w-bnj {
  fill: currentColor;
  d: path("m12 5.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7 3.7a.996.996 0 0 0-1.41 0L8.12 6.88a.996.996 0 1 0 1.41 1.41zm0 12.34l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 1 0-1.41-1.41z");
}
</style><path class="w9w2w-bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-unfold-more"} {...others} />);
}

export default Component;
