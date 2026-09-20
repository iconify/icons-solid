import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.u5i80ht_a {
  fill: currentColor;
  d: path("M2.5 11.167c0-.368.246-.667.55-.667h9.9c.304 0 .55.299.55.667v2.666c0 .368-.246.667-.55.667h-9.9c-.304 0-.55-.299-.55-.667z");
}
</style><path class="u5i80ht_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-color-accent-16-filled"} {...others} />);
}

export default Component;
