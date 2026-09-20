import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.d-0qihdyl {
  fill: currentColor;
  d: path("M9.25 13.25V2.75a.75.75 0 0 1 1.493-.102l.007.102v10.5a.75.75 0 0 1-1.493.102zm-4 0V2.75a.75.75 0 0 1 1.493-.102l.007.102v10.5a.75.75 0 0 1-1.493.102z");
}
</style><path class="d-0qihdyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-vertical-16-filled"} {...others} />);
}

export default Component;
