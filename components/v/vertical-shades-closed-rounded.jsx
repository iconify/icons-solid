import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n6qd1hirg {
  fill: currentColor;
  d: path("M3 21q-.425 0-.712-.288T2 20t.288-.712T3 19h1V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21zm3-2h1.5V5H6zm3.5 0H11V5H9.5zm3.5 0h1.5V5H13zm3.5 0H18V5h-1.5z");
}
</style><path class="n6qd1hirg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vertical-shades-closed-rounded"} {...others} />);
}

export default Component;
