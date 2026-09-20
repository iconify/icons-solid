import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xyztj1bmk {
  fill: currentColor;
  d: path("M13 9V7h3V5h-5v10h6V9zm0 2h2v2h-2zm-7 7V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4z");
}
</style><path class="xyztj1bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-6-outline-sharp"} {...others} />);
}

export default Component;
