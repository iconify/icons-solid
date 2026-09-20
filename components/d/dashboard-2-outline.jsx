import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrwh_hb6f {
  fill: currentColor;
  d: path("M15 20v-7h7v7zm-4-9V4h11v7zm-9 9v-7h11v7zm0-9V4h7v7zm11-2h7V6h-7zm-9 9h7v-3H4zm13 0h3v-3h-3zM4 9h3V6H4zm3 0");
}
</style><path class="vrwh_hb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dashboard-2-outline"} {...others} />);
}

export default Component;
