import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yhspthftk {
  fill: currentColor;
  d: path("M16.5 16a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zM14 3a3 3 0 0 1 3 3v5.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V6a3 3 0 0 1 3-3z");
}
</style><path class="yhspthftk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-add-below-20-filled"} {...others} />);
}

export default Component;
