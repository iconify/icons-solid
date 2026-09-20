import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqlwwlbyv {
  fill: currentColor;
  d: path("m12 18l4-4l-1.425-1.425L12 15.15l-2.575-2.575L8 14zm-2.575-6.575L12 8.85l2.575 2.575L16 10l-4-4l-4 4zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="bqlwwlbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:expansion-panels-outline-sharp"} {...others} />);
}

export default Component;
