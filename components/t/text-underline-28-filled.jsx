import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.z-y35lbrx {
  fill: currentColor;
  d: path("M20 22a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM19 4a1 1 0 0 1 1 1v9a6 6 0 0 1-12 0V5a1 1 0 0 1 2 0v9a4 4 0 0 0 8 0V5a1 1 0 0 1 1-1");
}
</style><path class="z-y35lbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-underline-28-filled"} {...others} />);
}

export default Component;
