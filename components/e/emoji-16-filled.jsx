import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.r7d0xl8fx {
  fill: currentColor;
  d: path("M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-.114 1.917a.5.5 0 1 0-.745.667A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 2.609-1.166a.5.5 0 1 0-.745-.667A2.5 2.5 0 0 1 8 10.5c-.74 0-1.405-.321-1.864-.833M9.75 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="r7d0xl8fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:emoji-16-filled"} {...others} />);
}

export default Component;
