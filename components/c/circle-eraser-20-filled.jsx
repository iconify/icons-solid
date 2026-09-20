import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.m--udc3le {
  fill: currentColor;
  d: path("M8.731 17.174a2.5 2.5 0 0 1 0-3.536l4.9-4.9a2.5 2.5 0 0 1 3.536 0l.8.8a7.995 7.995 0 1 0-8.441 8.44zm7.737-7.734l2.095 2.1a1.5 1.5 0 0 1 0 2.122l-3.6 3.6l-4.216-4.217l3.6-3.6a1.5 1.5 0 0 1 2.122 0zm-2.212 8.523l-4.216-4.217l-.6.6a1.5 1.5 0 0 0 0 2.122l2.1 2.095a1.5 1.5 0 0 0 1.117.438h4.092a.5.5 0 0 0 0-1h-2.531z");
}
</style><path class="m--udc3le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-eraser-20-filled"} {...others} />);
}

export default Component;
