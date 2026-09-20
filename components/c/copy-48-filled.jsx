import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gqoapcb6h {
  fill: currentColor;
  d: path("M17 27.75A8.25 8.25 0 0 0 25.25 36h3.744a6.25 6.25 0 0 1-6.244 6h-10.5A6.25 6.25 0 0 1 6 35.75v-15.5A6.25 6.25 0 0 1 12.25 14H17zM35.75 6A6.25 6.25 0 0 1 42 12.25v15.5A6.25 6.25 0 0 1 35.75 34h-10.5A6.25 6.25 0 0 1 19 27.75v-15.5A6.25 6.25 0 0 1 25.25 6z");
}
</style><path class="gqoapcb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:copy-48-filled"} {...others} />);
}

export default Component;
