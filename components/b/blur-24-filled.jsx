import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxelstbpb {
  fill: currentColor;
  d: path("M3 12a9 9 0 0 1 13.977-7.5H12v1h6.225a9 9 0 0 1 1.26 1.5H12v1h8.064q.358.717.584 1.5H12v1h8.876q.123.733.124 1.5h-9v1h8.945a9 9 0 0 1-.297 1.5H12v1h8.294a9 9 0 0 1-.81 1.5H12v1h6.708A9 9 0 0 1 3 12");
}
</style><path class="qxelstbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:blur-24-filled"} {...others} />);
}

export default Component;
