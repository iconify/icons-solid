import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.emu50fujd {
  fill: currentColor;
  d: path("M6.5 1a.5.5 0 0 0 0 1h2.793L4.879 6.414a2.5 2.5 0 1 0 .707.707L10 2.707V5.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zM2 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0");
}
</style><path class="emu50fujd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-flow-diagonal-up-right-12-regular"} {...others} />);
}

export default Component;
