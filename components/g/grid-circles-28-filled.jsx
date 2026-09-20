import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.qt_e4xbfx {
  fill: currentColor;
  d: path("M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m12 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-7 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10");
}
</style><path class="qt_e4xbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:grid-circles-28-filled"} {...others} />);
}

export default Component;
