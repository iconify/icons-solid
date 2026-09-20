import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ww78qrbhr {
  fill: currentColor;
  d: path("M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35a3.75 3.75 0 0 1-3.75-3.75v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 1 1 0-2.5zm-25-17.5c0-.69.56-1.25 1.25-1.25h20a1.25 1.25 0 1 1 0 2.5H14c-.69 0-1.25-.56-1.25-1.25");
}
</style><path class="ww78qrbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:scan-dash-48-regular"} {...others} />);
}

export default Component;
