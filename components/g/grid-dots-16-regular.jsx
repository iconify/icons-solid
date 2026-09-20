import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.tx-0mjalx {
  fill: currentColor;
  d: path("M3 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M3 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M3 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="tx-0mjalx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:grid-dots-16-regular"} {...others} />);
}

export default Component;
