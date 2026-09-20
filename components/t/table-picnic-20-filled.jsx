import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yrp986b_t {
  fill: currentColor;
  d: path("M4.441 16.042a.751.751 0 0 1-1.382-.584L4.308 12.5h1.629zm12.5-.584a.751.751 0 0 1-1.382.584L14.064 12.5h1.628zM6.993 10h6.014l-1.689-4h1.63l1.689 4h3.613a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h3.613l1.689-4h1.63zm8.257-6.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="yrp986b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-picnic-20-filled"} {...others} />);
}

export default Component;
