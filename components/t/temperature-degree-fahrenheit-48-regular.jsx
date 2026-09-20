import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zxpx90bbt {
  fill: currentColor;
  d: path("M7.5 14.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m12.75 0C23.56 8 23 8.56 23 9.25v29.5a1.25 1.25 0 1 0 2.5 0V25h13.25a1.25 1.25 0 1 0 0-2.5H25.5v-12h15.25a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="zxpx90bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:temperature-degree-fahrenheit-48-regular"} {...others} />);
}

export default Component;
