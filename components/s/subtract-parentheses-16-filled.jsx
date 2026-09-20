import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gp577nbqp {
  fill: currentColor;
  d: path("M4.7 3.6a.75.75 0 1 0-.901-1.2A6.99 6.99 0 0 0 1 8a6.99 6.99 0 0 0 2.799 5.6a.75.75 0 0 0 .9-1.2A5.49 5.49 0 0 1 2.5 8a5.49 5.49 0 0 1 2.2-4.4m7.5-1.2a.75.75 0 1 0-.9 1.2A5.49 5.49 0 0 1 13.5 8a5.49 5.49 0 0 1-2.2 4.4a.75.75 0 1 0 .901 1.2A6.99 6.99 0 0 0 15 8a6.99 6.99 0 0 0-2.799-5.6M5.75 7.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="gp577nbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:subtract-parentheses-16-filled"} {...others} />);
}

export default Component;
