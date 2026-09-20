import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.d45pgtidt {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v6.5h22v-6.5A3.75 3.75 0 0 0 21.25 3zM25 14.75H3v6.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25z");
}
</style><path class="d45pgtidt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-28-filled"} {...others} />);
}

export default Component;
