import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kdzu0ac8s {
  fill: currentColor;
  d: path("m4.825 11l3.9 3.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-4.6-4.6q-.15-.15-.213-.325T2.426 11t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.275T8.7 5.7q.3.3.3.713t-.3.712zm6 1l2.9 2.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-4.6-4.6q-.15-.15-.213-.325T7.426 11t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L10.825 10H17q2.075 0 3.538 1.463T22 15v3q0 .425-.288.713T21 19t-.712-.288T20 18v-3q0-1.25-.875-2.125T17 12z");
}
</style><path class="kdzu0ac8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reply-all-rounded"} {...others} />);
}

export default Component;
