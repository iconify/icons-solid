import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.h2x3_g82z {
  fill: currentColor;
  d: path("M9 4a5 5 0 0 0-5 5v11h2V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11h2V9a5 5 0 0 0-5-5zm11 18v6h-8v-6zm3 6h-1v-6h6v1a5 5 0 0 1-5 5m-13-6v6H9a5 5 0 0 1-5-5v-1z");
}
</style><path class="h2x3_g82z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-bottom-row-32-filled"} {...others} />);
}

export default Component;
