import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eh1ii__7t {
  fill: currentColor;
  d: path("M7.25 20v-.308L8.942 18H4v-1h1V6H4V5h3.75V3.77h8.5V5H20v1h-1v11h1v1h-4.962l1.693 1.692V20h-1.039l-2-2H10.29l-2 2zM6 17h12v-5.461H6zm6.5-6.461H18v-3.77h-5.5zm-6.5 0h5.5v-3.77H6zm6.004 4.75q.41 0 .683-.275t.274-.684t-.274-.697t-.684-.287t-.697.287t-.287.697t.287.684t.697.274M6 11.538h12z");
}
</style><path class="eh1ii__7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:trolley-cable-car-outline-sharp"} {...others} />);
}

export default Component;
