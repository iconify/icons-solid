import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ug2grlb9b {
  fill: currentColor;
  d: path("M4 5v14h6.558V5zM3 20V4h16v3.116h-1V5h-6.442v14H18v-2.116h1V20zm7.558-8h1zM18 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="ug2grlb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-column-right-outline"} {...others} />);
}

export default Component;
