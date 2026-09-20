import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttqjf1b4r {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h8V5H5zm14 0V5h-4v14z");
}
</style><path class="ttqjf1b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-layout-side-outline-sharp"} {...others} />);
}

export default Component;
