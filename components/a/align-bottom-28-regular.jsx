import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.rpk6htbvv {
  fill: currentColor;
  d: path("M2.75 25a.75.75 0 0 1 0-1.5h22.5a.75.75 0 0 1 0 1.5zM5 19.25A2.75 2.75 0 0 0 7.75 22h2.5A2.75 2.75 0 0 0 13 19.25V5.75A2.75 2.75 0 0 0 10.25 3h-2.5A2.75 2.75 0 0 0 5 5.75zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25zM15 19.25A2.75 2.75 0 0 0 17.75 22h2.5A2.75 2.75 0 0 0 23 19.25v-8a2.75 2.75 0 0 0-2.75-2.75h-2.5A2.75 2.75 0 0 0 15 11.25zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25v-8c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25z");
}
</style><path class="rpk6htbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-bottom-28-regular"} {...others} />);
}

export default Component;
