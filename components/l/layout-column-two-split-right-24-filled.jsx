import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0-q-0b3t {
  fill: currentColor;
  d: path("M17.75 21h-5v-8.25H21v5A3.25 3.25 0 0 1 17.75 21M21 11.25h-8.25V3h5A3.25 3.25 0 0 1 21 6.25zM6.25 3h5v18h-5A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3");
}
</style><path class="i0-q-0b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-column-two-split-right-24-filled"} {...others} />);
}

export default Component;
