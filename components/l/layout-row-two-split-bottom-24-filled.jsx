import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg_xbwrwt {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v5h18v-5A3.25 3.25 0 0 0 17.75 3zM21 12.75h-8.25V21h5A3.25 3.25 0 0 0 21 17.75zm-9.75 0H3v5A3.25 3.25 0 0 0 6.25 21h5z");
}
</style><path class="fg_xbwrwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-split-bottom-24-filled"} {...others} />);
}

export default Component;
