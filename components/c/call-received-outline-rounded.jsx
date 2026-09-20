import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhru11l-r {
  fill: currentColor;
  d: path("M6 19q-.425 0-.712-.288T5 18v-8q0-.425.288-.712T6 9t.713.288T7 10v5.6L17.9 4.7q.275-.275.7-.275t.7.275t.275.7t-.275.7L8.4 17H14q.425 0 .713.288T15 18t-.288.713T14 19z");
}
</style><path class="dhru11l-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-received-outline-rounded"} {...others} />);
}

export default Component;
