import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ivno8najc {
  fill: currentColor;
  d: path("M15.147 9.646a.5.5 0 1 1 .707.707l-5.5 5.5a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.707L10 14.793zm0-5a.5.5 0 1 1 .707.708l-5.5 5.5a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.708L10 9.793z");
}
</style><path class="ivno8najc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-double-down-20-regular"} {...others} />);
}

export default Component;
