import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u7aqx3bzr {
  fill: currentColor;
  d: path("M17.56 8.44a1.5 1.5 0 0 1 0 2.12L7.622 20.5l9.94 9.94a1.5 1.5 0 0 1-2.122 2.12l-11-11a1.5 1.5 0 0 1 0-2.12l11-11a1.5 1.5 0 0 1 2.122 0m9 0a1.5 1.5 0 0 1 0 2.12L18.122 19H24.5C35.27 19 44 27.73 44 38.5a1.5 1.5 0 0 1-3 0C41 29.387 33.613 22 24.5 22h-6.379l8.44 8.44a1.5 1.5 0 0 1-2.122 2.12l-11-11a1.5 1.5 0 0 1 0-2.12l11-11a1.5 1.5 0 0 1 2.122 0");
}
</style><path class="u7aqx3bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-all-48-filled"} {...others} />);
}

export default Component;
