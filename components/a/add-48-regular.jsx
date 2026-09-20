import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j4ghm3bvf {
  fill: currentColor;
  d: path("M24 5.25c.69 0 1.25.56 1.25 1.25v16.25H41.5a1.25 1.25 0 1 1 0 2.5H25.25V41.5a1.25 1.25 0 1 1-2.5 0V25.25H6.5a1.25 1.25 0 1 1 0-2.5h16.25V6.5c0-.69.56-1.25 1.25-1.25");
}
</style><path class="j4ghm3bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:add-48-regular"} {...others} />);
}

export default Component;
