import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.b44oqnv_e {
  fill: currentColor;
  d: path("M3.5 5.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4.25 0a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0V8.5h3.75a.75.75 0 0 0 0-1.5H9.5V4.5h4.25a.75.75 0 0 0 0-1.5z");
}
</style><path class="b44oqnv_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:temperature-degree-fahrenheit-16-filled"} {...others} />);
}

export default Component;
