import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.bupg7kupl {
  fill: currentColor;
  d: path("M13 6a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zM7 1a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zm2 10a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4z");
}
</style><path class="bupg7kupl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:poll-horizontal-16-filled"} {...others} />);
}

export default Component;
