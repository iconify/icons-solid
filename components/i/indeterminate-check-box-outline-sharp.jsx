import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdmhjibzm {
  fill: currentColor;
  d: path("M7 13h10v-2H7zm-4 8V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="bdmhjibzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:indeterminate-check-box-outline-sharp"} {...others} />);
}

export default Component;
