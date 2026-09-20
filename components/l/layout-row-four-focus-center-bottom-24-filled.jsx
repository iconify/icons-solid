import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lmdv3lb2c {
  fill: currentColor;
  d: path("M17.75 21A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21zm1.75-3.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V16.5h15zm0-5.75h-15V9h15zm-15-5.75c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75V7.5h-15z");
}
</style><path class="lmdv3lb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-four-focus-center-bottom-24-filled"} {...others} />);
}

export default Component;
