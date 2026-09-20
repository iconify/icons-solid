import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.es3spcc6v {
  fill: currentColor;
  d: path("M7.298 3.256c.63-.63 1.707-.184 1.707.707v3.543a1.5 1.5 0 0 1-1.5 1.5H3.962c-.89 0-1.337-1.077-.707-1.707zm.707.707L3.962 8.006h3.543a.5.5 0 0 0 .5-.5z");
}
</style><path class="es3spcc6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-down-right-12-regular"} {...others} />);
}

export default Component;
