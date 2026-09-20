import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6qzq_d4v {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v5.275q-.875-.625-1.9-.95T17.975 10q-2.95 0-4.962 2.063T11 16.975q0 .8.175 1.55T11.7 20zm12 0v-.55q0-1.125 1.1-1.787T18 17t2.9.663T22 19.45V20zm2.588-4.587Q16 14.825 16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16t-1.412-.587");
}
</style><path class="b6qzq_d4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:folder-supervised-sharp"} {...others} />);
}

export default Component;
