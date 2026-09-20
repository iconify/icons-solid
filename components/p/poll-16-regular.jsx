import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.oijkm1car {
  fill: currentColor;
  d: path("M8 1a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2m1 2v10a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0M3 7a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m1 6a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm7-6a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0zm3 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z");
}
</style><path class="oijkm1car"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:poll-16-regular"} {...others} />);
}

export default Component;
