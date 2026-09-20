import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thfj-xbcm {
  fill: currentColor;
  d: path("M8 17h8v-2h-6v-2h5v-2h-5V9h6V7H8zm-5 4V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="thfj-xbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:e-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
