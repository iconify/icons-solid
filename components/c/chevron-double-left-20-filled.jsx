import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.kjfi3abeo {
  fill: currentColor;
  d: path("M8.97 4.22a.75.75 0 1 1 1.06 1.06L5.31 10l4.72 4.72a.75.75 0 1 1-1.06 1.06l-5.25-5.25a.75.75 0 0 1 0-1.06zm5.5 0a.75.75 0 1 1 1.06 1.06L10.81 10l4.72 4.72a.75.75 0 1 1-1.06 1.06l-5.25-5.25a.75.75 0 0 1 0-1.06z");
}
</style><path class="kjfi3abeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-double-left-20-filled"} {...others} />);
}

export default Component;
