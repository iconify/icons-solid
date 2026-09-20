import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.g8rpkac4c {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16M8.5 6.5A.5.5 0 0 0 8 7v6a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5");
}
</style><path class="g8rpkac4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pause-circle-20-filled"} {...others} />);
}

export default Component;
