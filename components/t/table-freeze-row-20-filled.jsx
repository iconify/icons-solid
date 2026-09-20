import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ybeuvno5q {
  fill: currentColor;
  d: path("M14.5 4A1.5 1.5 0 0 1 16 5.5V8h-3v4h4V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5A1.5 1.5 0 0 1 5.5 4zM3 14.5V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5m9-1.5H8v4h4zM8 8v4h4V8zm5 9v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5z");
}
</style><path class="ybeuvno5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-freeze-row-20-filled"} {...others} />);
}

export default Component;
