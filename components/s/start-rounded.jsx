import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s8p8tj94v {
  fill: currentColor;
  d: path("M3 18q-.425 0-.712-.288T2 17V7q0-.425.288-.712T3 6t.713.288T4 7v10q0 .425-.288.713T3 18m15.175-5H7q-.425 0-.712-.288T6 12t.288-.712T7 11h11.175L15.3 8.1q-.275-.275-.288-.687T15.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.275T15.3 17.3q-.3-.3-.3-.712t.3-.713z");
}
</style><path class="s8p8tj94v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:start-rounded"} {...others} />);
}

export default Component;
