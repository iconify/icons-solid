import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.e64xl3r0r {
  fill: currentColor;
  d: path("M14 8.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m0 8a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5M11.75 22a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0");
}
</style><path class="e64xl3r0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-vertical-28-regular"} {...others} />);
}

export default Component;
