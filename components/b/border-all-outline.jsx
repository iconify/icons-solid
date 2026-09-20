import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-ya9gmyp {
  fill: currentColor;
  d: path("M3 21V3h18v18zm16-2v-6h-6v6zm0-14h-6v6h6zM5 5v6h6V5zm0 14h6v-6H5z");
}
</style><path class="p-ya9gmyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:border-all-outline"} {...others} />);
}

export default Component;
