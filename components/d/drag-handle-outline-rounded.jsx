import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yqr1bpuww {
  fill: currentColor;
  d: path("M5 15q-.425 0-.712-.288T4 14t.288-.712T5 13h14q.425 0 .713.288T20 14t-.288.713T19 15zm0-4q-.425 0-.712-.288T4 10t.288-.712T5 9h14q.425 0 .713.288T20 10t-.288.713T19 11z");
}
</style><path class="yqr1bpuww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drag-handle-outline-rounded"} {...others} />);
}

export default Component;
