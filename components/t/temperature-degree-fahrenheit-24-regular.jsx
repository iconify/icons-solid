import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxwchbc6b {
  fill: currentColor;
  d: path("M5 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.75 0a.75.75 0 0 0-.75.75v12.5a.75.75 0 0 0 1.5 0V12.5h5.75a.75.75 0 0 0 0-1.5H13V6.5h6.25a.75.75 0 0 0 0-1.5z");
}
</style><path class="cxwchbc6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:temperature-degree-fahrenheit-24-regular"} {...others} />);
}

export default Component;
