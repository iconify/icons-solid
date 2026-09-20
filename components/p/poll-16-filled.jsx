import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.g84hw2bma {
  fill: currentColor;
  d: path("M6 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm10-2a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0z");
}
</style><path class="g84hw2bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:poll-16-filled"} {...others} />);
}

export default Component;
