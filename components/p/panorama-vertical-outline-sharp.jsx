import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r5fv0mhth {
  fill: currentColor;
  d: path("M6.375 20.025H17.65q-.575-1.95-.862-3.962t-.288-4.038t.288-4.038t.862-3.962H6.375q.575 1.95.85 3.963t.275 4.037t-.275 4.038t-.85 3.962M3.475 22q.875-1.875 1.45-4.5T5.5 12t-.575-5.5T3.475 2H20.5q-.875 1.875-1.437 4.5T18.5 12t.563 5.5T20.5 22zm8.55-9.975");
}
</style><path class="r5fv0mhth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:panorama-vertical-outline-sharp"} {...others} />);
}

export default Component;
