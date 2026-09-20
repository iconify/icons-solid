import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j0d0nmbpd {
  fill: currentColor;
  d: path("M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24v4h-5.25c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h2A5.75 5.75 0 0 0 44 38.25V24c0-11.046-8.954-20-20-20S4 12.954 4 24v14.25A5.75 5.75 0 0 0 9.75 44h2c.69 0 1.25-.56 1.25-1.25v-13.5c0-.69-.56-1.25-1.25-1.25H6.5zm16.25-.75v21.5a1.25 1.25 0 1 0 2.5 0v-21.5a1.25 1.25 0 1 0-2.5 0M18.25 28c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25M31 29.25a1.25 1.25 0 1 0-2.5 0v9.5a1.25 1.25 0 1 0 2.5 0z");
}
</style><path class="j0d0nmbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:headphones-sound-wave-48-filled"} {...others} />);
}

export default Component;
