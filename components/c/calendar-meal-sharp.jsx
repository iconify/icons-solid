import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zop2105jl {
  fill: currentColor;
  d: path("M3 21V3h3V1h2v2h8V1h2v2h3v18zm6-4h1.5v-4q.65-.175 1.075-.712T12 11.075V7h-1v3.775h-.75V7h-1v3.775H8.5V7h-1v4.075q0 .675.425 1.213T9 13zm6 0h1.5V7q-1.25 0-2.125.875T13.5 10v3H15z");
}
</style><path class="zop2105jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:calendar-meal-sharp"} {...others} />);
}

export default Component;
