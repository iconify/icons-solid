import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.trkr3nb2h {
  fill: currentColor;
  d: path("m19.475 15.525l-1.4-1.425l1.1-1.1H16v-2h3.15l-1.075-1.075L19.5 8.5L23 12zM2 5V3h12v2zm4.5 12.5h3V15H12v-3H9.5V9.5h-3V12H4v3h2.5zM3 21q-.825 0-1.412-.587T1 19V8q0-.825.588-1.412T3 6h10q.825 0 1.413.588T15 8v11q0 .825-.587 1.413T13 21z");
}
</style><path class="trkr3nb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:outpatient-med"} {...others} />);
}

export default Component;
