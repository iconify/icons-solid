import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.senccib5v {
  fill: currentColor;
  d: path("M19.75 6a1.25 1.25 0 1 1 0 2.5h-7.5a3.75 3.75 0 0 0-3.75 3.75v2.5a1.25 1.25 0 1 1-2.5 0v-2.5A6.25 6.25 0 0 1 12.25 6zM6 25.25A6.25 6.25 0 0 1 12.25 19h10.5A6.25 6.25 0 0 1 29 25.25v10.5A6.25 6.25 0 0 1 22.75 42h-10.5A6.25 6.25 0 0 1 6 35.75zM33.25 42a1.25 1.25 0 1 1 0-2.5h2.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a1.25 1.25 0 1 1 2.5 0v7.5A6.25 6.25 0 0 1 35.75 42zm-5-33.5a1.25 1.25 0 1 1 0-2.5h7.5A6.25 6.25 0 0 1 42 12.25v7.5a1.25 1.25 0 1 1-2.5 0v-7.5a3.75 3.75 0 0 0-3.75-3.75z");
}
</style><path class="senccib5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:resize-48-filled"} {...others} />);
}

export default Component;
