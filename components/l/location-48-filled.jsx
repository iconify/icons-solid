import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a5qpazvbi {
  fill: currentColor;
  d: path("M24 4c9.389 0 17 7.611 17 17a16.93 16.93 0 0 1-4.02 10.98l-.002.001l-.016.019H37L26.911 42.709a4 4 0 0 1-5.822 0L11 32h.038l-.018-.02l-.02-.025A17 17 0 0 1 9.274 29.5A16.9 16.9 0 0 1 7 21c0-9.389 7.611-17 17-17m0 11a6 6 0 1 0 0 12a6 6 0 0 0 0-12");
}
</style><path class="a5qpazvbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:location-48-filled"} {...others} />);
}

export default Component;
