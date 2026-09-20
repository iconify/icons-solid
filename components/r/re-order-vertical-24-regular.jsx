import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ao1ibroqf {
  fill: currentColor;
  d: path("M13.25 21.25V2.75a.75.75 0 0 1 1.493-.102l.007.102v18.5a.75.75 0 0 1-1.493.102zm-4 0V2.75a.75.75 0 0 1 1.493-.102l.007.102v18.5a.75.75 0 0 1-1.493.102z");
}
</style><path class="ao1ibroqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-vertical-24-regular"} {...others} />);
}

export default Component;
