import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0si962-a {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM7.01 6H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m10.897 13.321a3.83 3.83 0 1 1 1.414-1.414l2.386 2.386a.999.999 0 1 1-1.414 1.414ZM10 14v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1m7.695 2.689a1.83 1.83 0 1 0-3.39-1.376a1.83 1.83 0 0 0 3.39 1.376M7.01 16H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="c0si962-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-search-corner-fill-sharp"} {...others} />);
}

export default Component;
