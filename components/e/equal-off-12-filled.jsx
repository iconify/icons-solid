import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.wi38i3baq {
  fill: currentColor;
  d: path("M1.854 1.146a.5.5 0 1 0-.708.708L2.793 3.5H2.25a.75.75 0 0 0 0 1.5h2.043l2 2H2.25a.75.75 0 0 0 0 1.5h5.543l2.353 2.354a.5.5 0 0 0 .708-.708zM9.12 7l1.217 1.216A.75.75 0 0 0 9.75 7zm-3.5-3.5L7.12 5h2.63a.75.75 0 0 0 0-1.5z");
}
</style><path class="wi38i3baq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:equal-off-12-filled"} {...others} />);
}

export default Component;
