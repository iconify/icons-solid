import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.odfwswbge {
  fill: currentColor;
  d: path("M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5H3zm0 6h14v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z");
}
</style><path class="odfwswbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:panel-bottom-20-regular"} {...others} />);
}

export default Component;
