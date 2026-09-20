import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.zgvhk9jrg {
  fill: currentColor;
  d: path("M4.75 3.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25H6V13H4.75A2.75 2.75 0 0 1 2 10.25v-5.5A2.75 2.75 0 0 1 4.75 2h5.5A2.75 2.75 0 0 1 13 4.75v5.5A2.75 2.75 0 0 1 10.25 13H9.5v-1.5h.75c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zM7 9.75A2.75 2.75 0 0 1 9.75 7h1v1.5h-1c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-1.5V7h1.5A2.75 2.75 0 0 1 18 9.75v5.5A2.75 2.75 0 0 1 15.25 18h-5.5A2.75 2.75 0 0 1 7 15.25z");
}
</style><path class="zgvhk9jrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:link-square-20-filled"} {...others} />);
}

export default Component;
