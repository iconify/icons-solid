import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kwa_vynzj {
  fill: currentColor;
  d: path("M7 21v-1H3v-2h1V6H3V4h3.325L7 2h10l.675 2H21v2h-1v12h1v2h-4v1zm-1-3h12v-5H6zm7.063-1.437q.437-.438.437-1.063t-.437-1.062T12 14t-1.062.438T10.5 15.5t.438 1.063T12 17t1.063-.437M6 11h3V7.5q0-.625-.437-1.062T7.5 6t-1.062.438T6 7.5zm4.5 0h3V7.5q0-.625-.437-1.062T12 6t-1.062.438T10.5 7.5zm4.5 0h3V7.5q0-.625-.437-1.062T16.5 6t-1.062.438T15 7.5zm-9 2h12z");
}
</style><path class="kwa_vynzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cable-car-outline"} {...others} />);
}

export default Component;
