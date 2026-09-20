import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.wr7d3fbqr {
  fill: currentColor;
  d: path("M9 13.5v-11a.5.5 0 0 1 .992-.09L10 2.5v11a.5.5 0 0 1-.992.09zm-3 0v-11a.5.5 0 0 1 .992-.09L7 2.5v11a.5.5 0 0 1-.992.09z");
}
</style><path class="wr7d3fbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-vertical-16-regular"} {...others} />);
}

export default Component;
