import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rtzb19x8l {
  fill: currentColor;
  d: path("M8.5 15H10V9H7v1.5h1.5zm3 0H16V9h-4.5zm1.5-1v-1.5h1.5V14zm0-2.5V10h1.5v1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="rtzb19x8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:18-up-rating-outline-sharp"} {...others} />);
}

export default Component;
