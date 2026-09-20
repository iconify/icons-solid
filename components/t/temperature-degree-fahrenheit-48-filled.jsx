import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x85wxjbzx {
  fill: currentColor;
  d: path("M8 15a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14m12.5 0A1.5 1.5 0 0 0 23 9.5v29a1.5 1.5 0 0 0 3 0V25h12.5a1.5 1.5 0 0 0 0-3H26V11h14.5a1.5 1.5 0 0 0 0-3z");
}
</style><path class="x85wxjbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:temperature-degree-fahrenheit-48-filled"} {...others} />);
}

export default Component;
