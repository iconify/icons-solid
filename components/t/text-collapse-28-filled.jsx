import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.p3lzxzmya {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM7.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM25 16a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z");
}
</style><path class="p3lzxzmya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-collapse-28-filled"} {...others} />);
}

export default Component;
