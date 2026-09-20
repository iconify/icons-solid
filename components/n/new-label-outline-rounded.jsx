import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y76hnnb6w {
  fill: currentColor;
  d: path("M15 4q.475 0 .9.213t.7.587l4.5 6q.4.525.4 1.2t-.4 1.2l-4.5 6q-.275.375-.7.588T15 20h-2q-.425 0-.712-.288T12 19t.288-.712T13 18h2l4.5-6L15 6H4v4q0 .425-.288.713T3 11t-.712-.288T2 10V6q0-.825.588-1.412T4 4zM5.288 20.713Q5 20.425 5 20v-2H3q-.425 0-.712-.288T2 17t.288-.712T3 16h2v-2q0-.425.288-.712T6 13t.713.288T7 14v2h2q.425 0 .713.288T10 17t-.288.713T9 18H7v2q0 .425-.288.713T6 21t-.712-.288M11.75 12");
}
</style><path class="y76hnnb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:new-label-outline-rounded"} {...others} />);
}

export default Component;
