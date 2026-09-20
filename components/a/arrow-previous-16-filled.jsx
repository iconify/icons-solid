import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.w2ibj_b2f {
  fill: currentColor;
  d: path("M12.296 11.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.027l4-4.25a.75.75 0 1 1 1.092 1.028L8.78 8zM4.75 3a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5A.75.75 0 0 0 4.75 3");
}
</style><path class="w2ibj_b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-previous-16-filled"} {...others} />);
}

export default Component;
