import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqnvmhzbc {
  fill: currentColor;
  d: path("M9 10h9V7H9zM3 21V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="zqnvmhzbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:position-top-right-outline-sharp"} {...others} />);
}

export default Component;
