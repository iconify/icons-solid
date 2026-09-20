import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_uphxbgj {
  fill: currentColor;
  d: path("M4 18v-1h16v1zm0-3.673v-1h16v1zm0-3.654v-1h16v1zM4 7V6h16v1z");
}
</style><path class="h_uphxbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:reorder-outline"} {...others} />);
}

export default Component;
