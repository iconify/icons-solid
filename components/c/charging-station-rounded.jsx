import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw1045tkz {
  fill: currentColor;
  d: path("M11.5 13h-1.2q-.275 0-.425-.238t-.025-.487l2.175-4.325q.1-.175.288-.138t.187.238V11h1.2q.275 0 .425.238t.025.487l-2.175 4.325q-.1.175-.288.138t-.187-.238zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z");
}
</style><path class="gw1045tkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:charging-station-rounded"} {...others} />);
}

export default Component;
