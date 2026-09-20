import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gq0r0u4ky {
  fill: currentColor;
  d: path("M6 2.75a.75.75 0 0 0-1.5 0V7.5a3.5 3.5 0 1 0 7 0V2.75a.75.75 0 0 0-1.5 0V7.5a2 2 0 1 1-4 0zM4.75 12.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="gq0r0u4ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-underline-character-u-16-filled"} {...others} />);
}

export default Component;
