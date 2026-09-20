import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.d8gqn9bez {
  fill: currentColor;
  d: path("M7 4H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2v5h4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h4zm1 5h4V4H8z");
}
</style><path class="d8gqn9bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:panel-top-gallery-20-filled"} {...others} />);
}

export default Component;
