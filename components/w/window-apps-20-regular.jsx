import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.do1kt0beo {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1v-1H6a2 2 0 0 1-2-2V7h13V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm10.75 2A1.75 1.75 0 0 0 13 9.75V13H9.75A1.75 1.75 0 0 0 8 14.75v2.5c0 .966.784 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75A1.75 1.75 0 0 0 17.25 8zM18 16.5a1.5 1.5 0 0 1-1.5 1.5H14v-4h4zm-4-6.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75V13h-4zM9.75 14H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75");
}
</style><path class="do1kt0beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:window-apps-20-regular"} {...others} />);
}

export default Component;
