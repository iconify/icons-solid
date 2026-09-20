import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gtik_l1ol {
  fill: currentColor;
  d: path("M4.646 4.146a.5.5 0 0 1 .708 0l5.5 5.5a.5.5 0 0 1 0 .707l-5.5 5.5a.5.5 0 1 1-.708-.707L9.793 10L4.646 4.854a.5.5 0 0 1 0-.708m5 0a.5.5 0 0 1 .707 0l5.5 5.5a.5.5 0 0 1 0 .707l-5.5 5.5a.5.5 0 1 1-.707-.707L14.793 10L9.646 4.854a.5.5 0 0 1 0-.708");
}
</style><path class="gtik_l1ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-double-right-20-regular"} {...others} />);
}

export default Component;
