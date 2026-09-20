import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3254dbdf {
  fill: currentColor;
  d: path("M6 19V6L3 2h15v3h2q.825 0 1.413.588T22 7v5q0 .825-.587 1.413T20 14h-2v5zm2-2h8V4H7l1 1.3zm10-5h2V7h-2zm-6 4h3V5h-3zm-9 6v-2h18v2zm8.5-11.5");
}
</style><path class="z3254dbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:kettle-outline-sharp"} {...others} />);
}

export default Component;
