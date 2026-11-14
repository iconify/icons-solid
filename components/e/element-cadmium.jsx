import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yy4xi0k0a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.375 2.25h9.25q2.123 0 3.624 1.501t1.501 3.624v9.25q0 2.123-1.501 3.624t-3.624 1.501h-9.25q-2.123 0-3.624-1.501T2.25 16.625v-9.25q0-2.123 1.501-3.624T7.375 2.25m8.136 4.25H8.489q-1.484 0-2.068 1.364l-.36.84q-.426.993.168 1.895q.595.902 1.675.901h8.192q1.08.001 1.675-.901q.594-.902.168-1.894l-.36-.841Q16.995 6.5 15.511 6.5m-7.022 6.25q-1.484 0-2.068 1.364l-.36.84q-.426.993.168 1.895q.595.902 1.675.901h8.192q1.08.001 1.675-.901q.594-.902.168-1.894l-.36-.841q-.584-1.364-2.068-1.364z");
}
</style><path class="yy4xi0k0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:element-cadmium"} {...others} />);
}

export default Component;
