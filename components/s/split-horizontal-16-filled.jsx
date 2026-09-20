import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.k6hiv-e7u {
  fill: currentColor;
  d: path("M14.5 8a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM11 1a2 2 0 0 1 2 2v3H3V3a2 2 0 0 1 2-2zM3 9v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9z");
}
</style><path class="k6hiv-e7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-horizontal-16-filled"} {...others} />);
}

export default Component;
