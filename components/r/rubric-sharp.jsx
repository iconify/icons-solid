import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxdkzc2ng {
  fill: currentColor;
  d: path("M4 21V3h16v10H6v2h5v2H6v2h5v2zm11.4 0l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4zM6 11h5V9H6zm7 0h5V9h-5zM6 7h5V5H6zm7 0h5V5h-5z");
}
</style><path class="gxdkzc2ng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:rubric-sharp"} {...others} />);
}

export default Component;
