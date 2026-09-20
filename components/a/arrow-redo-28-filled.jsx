import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.uv7cl2b2k {
  fill: currentColor;
  d: path("M7.011 5.436a5.76 5.76 0 0 1 7.833.115L20.552 11h-6.551a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6.618l-5.776-5.514A7.76 7.76 0 0 0 5.673 3.95c-3.324 2.991-3.439 8.166-.25 11.302l10.632 10.46a1 1 0 0 0 1.403-1.425L6.825 13.827a5.76 5.76 0 0 1 .186-8.39");
}
</style><path class="uv7cl2b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-redo-28-filled"} {...others} />);
}

export default Component;
