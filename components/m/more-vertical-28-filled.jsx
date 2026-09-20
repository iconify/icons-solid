import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ljj3f7ibf {
  fill: currentColor;
  d: path("M14 8.75a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5m0 8a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5M11.25 22a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0");
}
</style><path class="ljj3f7ibf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-vertical-28-filled"} {...others} />);
}

export default Component;
