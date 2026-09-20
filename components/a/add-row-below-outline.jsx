import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vyeexh3ip {
  fill: currentColor;
  d: path("M5 10h14V4H5zM3 20V2h18v18h-4v-2h2v-6H5v6h2v2zm9-10v2zm-1 12v-2H9v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="vyeexh3ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-row-below-outline"} {...others} />);
}

export default Component;
