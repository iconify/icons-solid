import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lmb11c2td {
  fill: currentColor;
  d: path("M13 15h2q.825 0 1.413-.587T17 13v-2q0-.825-.587-1.412T15 9h-2V7h3V5h-3q-.825 0-1.412.588T11 7v6q0 .825.588 1.413T13 15m0-4h2v2h-2zm-5 7q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zM8 4v12z");
}
</style><path class="lmb11c2td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-6-outline"} {...others} />);
}

export default Component;
