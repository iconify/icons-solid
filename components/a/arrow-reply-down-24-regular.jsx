import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dt3tmwb3w {
  fill: currentColor;
  d: path("M20.25 5a.75.75 0 0 1 .75.75v.5A7.75 7.75 0 0 1 13.25 14H5.56l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 1.06L5.56 12.5h7.69a6.25 6.25 0 0 0 6.25-6.25v-.5a.75.75 0 0 1 .75-.75");
}
</style><path class="dt3tmwb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-down-24-regular"} {...others} />);
}

export default Component;
