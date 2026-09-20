import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n2ntmpbcj {
  fill: currentColor;
  d: path("M19 17v-4H5v4zm0-6V7H5v4zM5 19q-.825 0-1.412-.587T3 17V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19z");
}
</style><path class="n2ntmpbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-stream-outline-sharp"} {...others} />);
}

export default Component;
