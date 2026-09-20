import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z28tpzb4d {
  fill: currentColor;
  d: path("M3 21V3h18v18zm7-2v-6H5v6zm2 0h7v-6h-7zm-7-8h14V5H5z");
}
</style><path class="z28tpzb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:team-dashboard-outline-sharp"} {...others} />);
}

export default Component;
