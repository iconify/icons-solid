import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q1fx0obcr {
  fill: currentColor;
  d: path("M8 20q-.425 0-.712-.288T7 19t.288-.712T8 18h8q.425 0 .713.288T17 19t-.288.713T16 20zm3.288-4.288Q11 15.425 11 15V7.825L9.1 9.7q-.275.275-.687.288T7.7 9.7q-.275-.275-.275-.7t.275-.7l3.6-3.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l3.6 3.6q.275.275.288.688T16.3 9.7q-.275.275-.7.275t-.7-.275L13 7.825V15q0 .425-.287.713T12 16t-.712-.288");
}
</style><path class="q1fx0obcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:upgrade-rounded"} {...others} />);
}

export default Component;
