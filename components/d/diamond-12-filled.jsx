import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.dc6c18b4s {
  fill: currentColor;
  d: path("M4.585 1.085a2 2 0 0 1 2.83 0l3.5 3.5a2 2 0 0 1 0 2.827l-3.5 3.5c-.782.78-2.049.78-2.83 0l-3.5-3.5a2 2 0 0 1 0-2.828z");
}
</style><path class="dc6c18b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:diamond-12-filled"} {...others} />);
}

export default Component;
