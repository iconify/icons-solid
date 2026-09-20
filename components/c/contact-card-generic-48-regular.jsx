import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y1s-7vbgq {
  fill: currentColor;
  d: path("M39.75 8A4.25 4.25 0 0 1 44 12.25v23.5A4.25 4.25 0 0 1 39.75 40H8.25A4.25 4.25 0 0 1 4 35.75v-23.5A4.25 4.25 0 0 1 8.25 8zm-31.5 2.5a1.75 1.75 0 0 0-1.75 1.75v23.5c0 .967.784 1.75 1.75 1.75h31.5a1.75 1.75 0 0 0 1.75-1.75v-23.5a1.75 1.75 0 0 0-1.75-1.75zm7.75 7a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M35.75 26a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5zM16 20a4 4 0 1 0 0 8a4 4 0 0 0 0-8m19.75-1a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="y1s-7vbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:contact-card-generic-48-regular"} {...others} />);
}

export default Component;
