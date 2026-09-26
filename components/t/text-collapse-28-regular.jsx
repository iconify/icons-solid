import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.g__8kfbyh {
  fill: currentColor;
  d: path("M25.25 22a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5zM7.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm20.75 3a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="g__8kfbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-collapse-28-regular"} {...others} />);
}

export default Component;
