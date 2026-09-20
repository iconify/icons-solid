import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.t8z5zwmqr {
  fill: currentColor;
  d: path("M3 13.75a.75.75 0 0 1 .75-.75h20.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75");
}
</style><path class="t8z5zwmqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:subtract-28-regular"} {...others} />);
}

export default Component;
