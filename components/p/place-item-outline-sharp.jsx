import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.snecruorz {
  fill: currentColor;
  d: path("M3 21V7h6v2H5v10h14V9h-4V7h6v14zm9-5l-4-4l1.4-1.4l1.6 1.575V0h2v12.175l1.6-1.575L16 12z");
}
</style><path class="snecruorz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:place-item-outline-sharp"} {...others} />);
}

export default Component;
