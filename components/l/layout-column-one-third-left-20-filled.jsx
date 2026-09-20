import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.nv-c0x6et {
  fill: currentColor;
  d: path("M8 17h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8zM7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1z");
}
</style><path class="nv-c0x6et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-column-one-third-left-20-filled"} {...others} />);
}

export default Component;
