import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.r1rgu-bue {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1h12zm0 4H4v2.5h12zM4 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5H4z");
}
</style><path class="r1rgu-bue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-four-focus-center-top-20-filled"} {...others} />);
}

export default Component;
