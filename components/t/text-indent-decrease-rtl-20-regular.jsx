import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.s_ci_5b3w {
  fill: currentColor;
  d: path("M5.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm-3 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM7 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m9.453-6.764a.5.5 0 1 0-.707.708l1.06 1.06l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.707z");
}
</style><path class="s_ci_5b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-indent-decrease-rtl-20-regular"} {...others} />);
}

export default Component;
