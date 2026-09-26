import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.od-x2zbcw {
  fill: currentColor;
  d: path("M17.5 15a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1zm-13-9a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 1.25a.5.5 0 0 0-.5.5V9H2.75a.5.5 0 0 0 0 1H4v1.25a.5.5 0 0 0 1 0V10h1.25a.5.5 0 0 0 0-1H5V7.75a.5.5 0 0 0-.5-.5m13 3.75a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1z");
}
</style><path class="od-x2zbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-expand-20-regular"} {...others} />);
}

export default Component;
