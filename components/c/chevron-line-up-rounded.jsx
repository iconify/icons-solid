import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l8zk8xb2p {
  fill: currentColor;
  d: path("M7 8q-.425 0-.712-.288T6 7t.288-.712T7 6h10q.425 0 .713.288T18 7t-.288.713T17 8zm5 5.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z");
}
</style><path class="l8zk8xb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chevron-line-up-rounded"} {...others} />);
}

export default Component;
