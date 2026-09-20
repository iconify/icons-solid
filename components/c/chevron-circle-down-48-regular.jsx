import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rfxc9gbgk {
  fill: currentColor;
  d: path("M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24S33.665 41.5 24 41.5S6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-8.616 16.366a1.25 1.25 0 0 0-1.768 1.768l9.5 9.5a1.25 1.25 0 0 0 1.768 0l9.5-9.5a1.25 1.25 0 0 0-1.768-1.768L24 28.982z");
}
</style><path class="rfxc9gbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-circle-down-48-regular"} {...others} />);
}

export default Component;
