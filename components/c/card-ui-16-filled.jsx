import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.a2ax2dbad {
  fill: currentColor;
  d: path("M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3zM3.75 9a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-.5A.75.75 0 0 0 7.25 9zM3.5 7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0-2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="a2ax2dbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:card-ui-16-filled"} {...others} />);
}

export default Component;
