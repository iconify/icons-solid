import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ou9x6sbxt {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h5v6.75H4.5zm0 6.5h6.75v6.75h-5a1.75 1.75 0 0 1-1.75-1.75zm8.25-1.5V4.5h5c.966 0 1.75.784 1.75 1.75v5z");
}
</style><path class="ou9x6sbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-cell-four-focus-bottom-right-24-filled"} {...others} />);
}

export default Component;
