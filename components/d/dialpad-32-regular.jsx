import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ackfdybph {
  fill: currentColor;
  d: path("M11 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7-21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="ackfdybph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dialpad-32-regular"} {...others} />);
}

export default Component;
