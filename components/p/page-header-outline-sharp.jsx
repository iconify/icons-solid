import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3ee18b_q {
  fill: currentColor;
  d: path("M3 5V3h18v2zm0 16V7h18v14zm2-2h14V9H5zm0 0V9z");
}
</style><path class="i3ee18b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-header-outline-sharp"} {...others} />);
}

export default Component;
