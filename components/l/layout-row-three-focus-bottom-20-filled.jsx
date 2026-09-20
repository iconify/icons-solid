import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.c7wvdfngd {
  fill: currentColor;
  d: path("M6 17a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zm10-9H4v4h12zm0-1V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1z");
}
</style><path class="c7wvdfngd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-three-focus-bottom-20-filled"} {...others} />);
}

export default Component;
