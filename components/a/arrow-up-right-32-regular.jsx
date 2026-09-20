import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.by1s2nban {
  fill: currentColor;
  d: path("M15 3a1 1 0 1 0 0 2h10.585L3.297 27.289a1 1 0 1 0 1.414 1.414L27 6.414V17a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1z");
}
</style><path class="by1s2nban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-32-regular"} {...others} />);
}

export default Component;
