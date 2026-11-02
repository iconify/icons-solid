import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-r5fg3qs {
  fill: currentColor;
  d: path("M18.586 7H7a3 3 0 0 0-3 3v1a1 1 0 0 1-2 0v-1a5 5 0 0 1 5-5h11.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414ZM22 14a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 19H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 17H17a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0Z");
}
</style><path class="e-r5fg3qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:repeat-fill-round"} {...others} />);
}

export default Component;
