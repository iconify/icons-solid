import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.t7bmuwbge {
  fill: currentColor;
  d: path("M14 20a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5-8.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M14 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5");
}
</style><path class="t7bmuwbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:grid-dots-28-filled"} {...others} />);
}

export default Component;
