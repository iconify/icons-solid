import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9fffob2b {
  fill: currentColor;
  d: path("M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z");
}
</style><path class="x9fffob2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-plus-minus"} {...others} />);
}

export default Component;
