import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.b2s5job3u {
  fill: currentColor;
  d: path("M4.5 6a.5.5 0 0 1 .5.5V8a2 2 0 1 1-2-2zM8 6a2 2 0 1 1-2 2V6.5a.5.5 0 0 1 .5-.5zM3 1a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5H3a2 2 0 1 1 0-4m5 0a2 2 0 1 1 0 4H6.5a.5.5 0 0 1-.5-.5V3a2 2 0 0 1 2-2");
}
</style><path class="b2s5job3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:clover-12-filled"} {...others} />);
}

export default Component;
