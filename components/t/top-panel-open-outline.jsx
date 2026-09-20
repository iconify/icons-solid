import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqu5iab4t {
  fill: currentColor;
  d: path("m12 16.5l4-4H8zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM19 8V5H5v3zM5 10v9h14v-9zm0-2V5z");
}
</style><path class="zqu5iab4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:top-panel-open-outline"} {...others} />);
}

export default Component;
