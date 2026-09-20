import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t0l8rmt8u {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h7V6H4zm9 0h7V6h-7zm-8-2h5v-2H5zm0-3h5v-2H5zm0-3h5V8H5zm9 6h5v-2h-5zm0-3h5v-2h-5zm0-3h5V8h-5zm-3 8V6z");
}
</style><path class="t0l8rmt8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:two-pager-outline"} {...others} />);
}

export default Component;
