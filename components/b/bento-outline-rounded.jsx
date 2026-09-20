import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xafd0oh_i {
  fill: currentColor;
  d: path("M4 19q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h16q.825 0 1.413.588T22 7v10q0 .825-.587 1.413T20 19zm10-8h6V7h-6zM4 17h8V7H4zm4-3.5q-.625 0-1.062-.437T6.5 12t.438-1.062T8 10.5t1.063.438T9.5 12t-.437 1.063T8 13.5m6 3.5h6v-4h-6z");
}
</style><path class="xafd0oh_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bento-outline-rounded"} {...others} />);
}

export default Component;
