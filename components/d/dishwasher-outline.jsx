import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zeebntbsf {
  fill: currentColor;
  d: path("M5 11v8h14v-8zm0-2h14V5H5zm7 9q-.825 0-1.412-.587T10 16q0-.675.375-1.437T12 12q1.25 1.8 1.625 2.563T14 16q0 .825-.587 1.413T12 18m5.713-10.288Q18 7.425 18 7t-.288-.712T17 6t-.712.288T16 7t.288.713T17 8t.713-.288M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 9V5z");
}
</style><path class="zeebntbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dishwasher-outline"} {...others} />);
}

export default Component;
