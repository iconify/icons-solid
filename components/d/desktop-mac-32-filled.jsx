import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ppebiob1s {
  fill: currentColor;
  d: path("M4.02 7.591Q4 7.791 4 8v12a4 4 0 0 0 4 4h4v1a1 1 0 0 1-1 1h-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-1a1 1 0 0 1-1-1v-1h4a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8a4 4 0 0 0-3.98 3.591M18 24v1c0 .35.06.687.17 1h-4.34c.11-.313.17-.65.17-1v-1zm6-2H8a2 2 0 0 1-2-2h20a2 2 0 0 1-2 2");
}
</style><path class="ppebiob1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:desktop-mac-32-filled"} {...others} />);
}

export default Component;
