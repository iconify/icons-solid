import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1j-c_auh {
  fill: currentColor;
  d: path("m12 11.5l4-4H8zM19 3q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3zM5 16v3h14v-3zm14-2V5H5v9zM5 16v3z");
}
</style><path class="m1j-c_auh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-panel-close-outline"} {...others} />);
}

export default Component;
