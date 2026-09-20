import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x_h42ibvk {
  fill: currentColor;
  d: path("M6 21v-.5L7.5 19H3v-2h1V6H3V4h4V2h10v2h4v2h-1v11h1v2h-4.5l1.5 1.5v.5h-2l-2-2h-4l-2 2zm0-4h12v-5H6zm7-7h5V7h-5zm-7 0h5V7H6zm6 6q.625 0 1.063-.437T13.5 14.5t-.437-1.062T12 13t-1.062.438T10.5 14.5t.438 1.063T12 16m-6-4h12z");
}
</style><path class="x_h42ibvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:trolley-cable-car-outline-sharp"} {...others} />);
}

export default Component;
