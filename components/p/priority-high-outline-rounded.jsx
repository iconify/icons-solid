import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xu_bhwaeb {
  fill: currentColor;
  d: path("M12 21q-.825 0-1.412-.587T10 19t.588-1.412T12 17t1.413.588T14 19t-.587 1.413T12 21m0-6q-.825 0-1.412-.587T10 13V5q0-.825.588-1.412T12 3t1.413.588T14 5v8q0 .825-.587 1.413T12 15");
}
</style><path class="xu_bhwaeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:priority-high-outline-rounded"} {...others} />);
}

export default Component;
