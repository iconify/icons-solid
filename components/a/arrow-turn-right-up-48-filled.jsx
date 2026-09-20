import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nd9lv6bdt {
  fill: currentColor;
  d: path("M7.5 35a1.5 1.5 0 0 0 0 3h18a7.5 7.5 0 0 0 7.5-7.5V13.121l6.44 6.44a1.5 1.5 0 0 0 2.12-2.122l-9-9a1.5 1.5 0 0 0-2.12 0l-9 9a1.5 1.5 0 0 0 2.12 2.122L30 13.12V30.5a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="nd9lv6bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-right-up-48-filled"} {...others} />);
}

export default Component;
