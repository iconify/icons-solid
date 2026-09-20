import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt4rpkbpx {
  fill: currentColor;
  d: path("M4 11q-.825 0-1.412-.587T2 9V6q0-.825.588-1.412T4 4h9v7zm0-2h7V6H4zm0 11q-.825 0-1.412-.587T2 18v-3q0-.825.588-1.412T4 13h11v7zm0-2h9v-3H4zm13 2v-9h-2V4h7l-2 5h2zM4.75 17.25h1.5v-1.5h-1.5zm0-9h1.5v-1.5h-1.5zM4 9V6zm0 9v-3z");
}
</style><path class="gt4rpkbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dynamic-form-outline"} {...others} />);
}

export default Component;
