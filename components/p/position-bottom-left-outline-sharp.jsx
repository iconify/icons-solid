import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tc_s9209a {
  fill: currentColor;
  d: path("M6 17h9v-3H6zm-3 4V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="tc_s9209a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:position-bottom-left-outline-sharp"} {...others} />);
}

export default Component;
