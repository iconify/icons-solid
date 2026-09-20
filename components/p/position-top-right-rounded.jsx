import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z95rfbrfm {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5.5-11h6q.625 0 1.063-.437T18 8.5t-.437-1.062T16.5 7h-6q-.625 0-1.062.438T9 8.5t.438 1.063T10.5 10");
}
</style><path class="z95rfbrfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:position-top-right-rounded"} {...others} />);
}

export default Component;
