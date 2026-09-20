import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.p7t1mcczl {
  fill: currentColor;
  d: path("M28.634 3.366a1.25 1.25 0 0 1 0 1.768l-23.5 23.5a1.25 1.25 0 0 1-1.768-1.768l23.5-23.5a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="p7t1mcczl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-32-filled"} {...others} />);
}

export default Component;
