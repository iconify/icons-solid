import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qnv1v1b1g {
  fill: currentColor;
  d: path("M3 21V3h13l5 5v13zm2-2h14V9h-4V5H5zm2-2h10v-2H7zm0-8h5V7H7zm0 4h10v-2H7zM5 5v4zv14z");
}
</style><path class="qnv1v1b1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:feed-outline-sharp"} {...others} />);
}

export default Component;
