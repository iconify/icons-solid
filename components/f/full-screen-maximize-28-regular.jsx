import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.bewr8cbfv {
  fill: currentColor;
  d: path("M3 5.75A2.75 2.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 0 1.5h-3.5c-.69 0-1.25.56-1.25 1.25v3.5a.75.75 0 0 1-1.5 0zm15-2a.75.75 0 0 1 .75-.75h3.5A2.75 2.75 0 0 1 25 5.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5a.75.75 0 0 1-.75-.75M3.75 18a.75.75 0 0 1 .75.75v3.5c0 .69.56 1.25 1.25 1.25h3.5a.75.75 0 0 1 0 1.5h-3.5A2.75 2.75 0 0 1 3 22.25v-3.5a.75.75 0 0 1 .75-.75m20.5 0a.75.75 0 0 1 .75.75v3.5A2.75 2.75 0 0 1 22.25 25h-3.5a.75.75 0 0 1 0-1.5h3.5c.69 0 1.25-.56 1.25-1.25v-3.5a.75.75 0 0 1 .75-.75");
}
</style><path class="bewr8cbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:full-screen-maximize-28-regular"} {...others} />);
}

export default Component;
