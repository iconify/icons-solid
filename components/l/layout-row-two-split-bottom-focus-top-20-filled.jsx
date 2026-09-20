import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.np369qzta {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm13 4h-5.5v6H14a2 2 0 0 0 2-2zm-6.5 0H4v4a2 2 0 0 0 2 2h3.5z");
}
</style><path class="np369qzta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-split-bottom-focus-top-20-filled"} {...others} />);
}

export default Component;
