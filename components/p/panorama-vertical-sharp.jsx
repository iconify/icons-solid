import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5zrrdl4b {
  fill: currentColor;
  d: path("M3.475 21.95q.875-1.875 1.45-4.5t.575-5.5t-.575-5.5t-1.45-4.5H20.5q-.875 1.875-1.437 4.5t-.563 5.5t.563 5.5t1.437 4.5z");
}
</style><path class="o5zrrdl4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:panorama-vertical-sharp"} {...others} />);
}

export default Component;
