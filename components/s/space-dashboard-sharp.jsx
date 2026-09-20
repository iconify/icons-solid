import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rgygz6bqe {
  fill: currentColor;
  d: path("M3 21V3h8v18zm10-11V3h8v7zm8 11h-8v-9h8z");
}
</style><path class="rgygz6bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:space-dashboard-sharp"} {...others} />);
}

export default Component;
