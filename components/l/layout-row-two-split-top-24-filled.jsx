import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhaqh90io {
  fill: currentColor;
  d: path("M11.25 11.25V3h-5A3.25 3.25 0 0 0 3 6.25v5zm1.5 0H21v-5A3.25 3.25 0 0 0 17.75 3h-5zm8.25 1.5H3v5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75z");
}
</style><path class="yhaqh90io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-split-top-24-filled"} {...others} />);
}

export default Component;
