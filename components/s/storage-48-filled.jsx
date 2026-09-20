import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r0jtwvb6z {
  fill: currentColor;
  d: path("M10.25 14A6.25 6.25 0 0 0 4 20.25v7.5A6.25 6.25 0 0 0 10.25 34h27.5A6.25 6.25 0 0 0 44 27.75v-7.5A6.25 6.25 0 0 0 37.75 14zM32 21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4");
}
</style><path class="r0jtwvb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:storage-48-filled"} {...others} />);
}

export default Component;
