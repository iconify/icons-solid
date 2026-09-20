import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdv6pc05m {
  fill: currentColor;
  d: path("M4 22V8H2V5q0-1.25.875-2.125T5 2h14q1.25 0 2.125.875T22 5v3h-2v14zm2-2h12v-3H6zm0-5h12v-3h-2v1q0 .425-.288.713T15 14t-.712-.288T14 13v-1H6zm0-5h8V8H6zm10 0h2V8h-2z");
}
</style><path class="tdv6pc05m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:blinds-2"} {...others} />);
}

export default Component;
