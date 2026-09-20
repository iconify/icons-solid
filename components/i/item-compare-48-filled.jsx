import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yehrtec4z {
  fill: currentColor;
  d: path("M24 5c.69 0 1.25.56 1.25 1.25v35.5l-.007.128a1.25 1.25 0 0 1-2.486 0l-.007-.128V6.25c0-.69.56-1.25 1.25-1.25m-9.25 11A4.25 4.25 0 0 1 19 20.25v7.5A4.25 4.25 0 0 1 14.75 32h-7.5A4.25 4.25 0 0 1 3 27.75v-7.5A4.25 4.25 0 0 1 7.25 16zm26 0A4.25 4.25 0 0 1 45 20.25v7.5A4.25 4.25 0 0 1 40.75 32h-7.5A4.25 4.25 0 0 1 29 27.75v-7.5A4.25 4.25 0 0 1 33.25 16z");
}
</style><path class="yehrtec4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:item-compare-48-filled"} {...others} />);
}

export default Component;
