import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prq47wbsr {
  fill: currentColor;
  d: path("M12 15h3q.825 0 1.413-.587T17 13V7q0-.825-.587-1.412T15 5h-2q-.825 0-1.412.588T11 7v2q0 .825.588 1.413T13 11h2v2h-3zm3-6h-2V7h2zm-7 9q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z");
}
</style><path class="prq47wbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-9"} {...others} />);
}

export default Component;
