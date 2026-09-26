import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.i5yfeibeg {
  fill: currentColor;
  d: path("M29.5 26a.5.5 0 0 1 0 1h-22a.5.5 0 0 1 0-1zM8.75 9a6.75 6.75 0 1 1 0 13.5a6.75 6.75 0 0 1 0-13.5m-3 6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm23.75 4a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-8a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-22a.5.5 0 0 1 0-1z");
}
</style><path class="i5yfeibeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-collapse-32-light"} {...others} />);
}

export default Component;
