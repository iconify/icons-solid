import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.panhvtztd {
  fill: currentColor;
  d: path("M5 9.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M7.5 5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M16 5a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V7h10a1 1 0 1 0 0-2z");
}
</style><path class="panhvtztd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:temperature-degree-fahrenheit-32-regular"} {...others} />);
}

export default Component;
