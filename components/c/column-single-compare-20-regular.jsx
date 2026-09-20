import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.h6nai9bue {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v2h10V4a1 1 0 0 0-1-1zm-1 8h10V7H5zm0 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2z");
}
</style><path class="h6nai9bue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:column-single-compare-20-regular"} {...others} />);
}

export default Component;
