import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-r3czx1t {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20v-9q0-.825.588-1.412T4 9h2V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v9q0 .825-.587 1.413T20 15h-2v5q0 .825-.587 1.413T16 22zm0-2h12v-7H4zm14-7h2V6H8v3h8q.825 0 1.413.588T18 11z");
}
</style><path class="f-r3czx1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:select-window-outline-rounded"} {...others} />);
}

export default Component;
