import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qu6efgbwl {
  fill: currentColor;
  d: path("M20.7 20.7q-.2.2-.512.275t-.638-.1L13.9 18l-2.2 2.2q-.3.3-.7.3t-.7-.3L8.1 18H5q-.425 0-.712-.288T4 17v-3.1l-2.2-2.2q-.3-.3-.3-.7t.3-.7L4 8.1V5q0-.425.288-.712T5 4h3.1l2.2-2.2q.3-.3.7-.3t.7.3L13.9 4H17q.425 0 .713.288T18 5v3.1l2.2 2.2q.3.3.3.7t-.3.7L18 13.9l2.875 5.65q.175.325.1.637t-.275.513");
}
</style><path class="qu6efgbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:comic-bubble-rounded"} {...others} />);
}

export default Component;
