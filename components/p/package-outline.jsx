import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjw4kjb1o {
  fill: currentColor;
  d: path("m10 9.75l2-1l2 1V5h-4zM7 17v-2h5v2zm-2 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 5v14zm0 14h14V5h-3v8l-4-2l-4 2V5H5z");
}
</style><path class="mjw4kjb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:package-outline"} {...others} />);
}

export default Component;
