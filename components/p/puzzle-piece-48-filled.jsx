import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h8yyx-x-w {
  fill: currentColor;
  d: path("M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5");
}
</style><path class="h8yyx-x-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:puzzle-piece-48-filled"} {...others} />);
}

export default Component;
