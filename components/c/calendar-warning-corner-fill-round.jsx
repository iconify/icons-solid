import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7arxcccf {
  fill: currentColor;
  d: path("M9 4h6V3a1 1 0 0 1 2 0v1.099a5.01 5.01 0 0 1 3.607 2.954c.261.616.395 1.278.393 1.947a1 1 0 0 1-1 1H5v7a3 3 0 0 0 3 3h1a1 1 0 0 1 0 2H8a5 5 0 0 1-5-5V9a5.01 5.01 0 0 1 4-4.901V3a1 1 0 0 1 2 0Zm9 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m-1 6h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}
</style><path class="h7arxcccf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-warning-corner-fill-round"} {...others} />);
}

export default Component;
