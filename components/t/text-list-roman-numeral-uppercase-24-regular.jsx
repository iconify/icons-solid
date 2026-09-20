import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4fk81s3u {
  fill: currentColor;
  d: path("M6 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 7a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zM5.25 16a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75m4.5-11a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="j4fk81s3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-list-roman-numeral-uppercase-24-regular"} {...others} />);
}

export default Component;
