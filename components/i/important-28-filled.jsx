import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.p4c3zmunn {
  fill: currentColor;
  d: path("M14 20a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0-18a5 5 0 0 1 5 5c0 .538-.126 1.257-.304 2.02a40 40 0 0 1-.702 2.551a103 103 0 0 1-1.607 4.765A2.53 2.53 0 0 1 14 18a2.53 2.53 0 0 1-2.387-1.664a103 103 0 0 1-1.607-4.765a40 40 0 0 1-.702-2.55C9.126 8.257 9 7.538 9 7a5 5 0 0 1 5-5");
}
</style><path class="p4c3zmunn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:important-28-filled"} {...others} />);
}

export default Component;
