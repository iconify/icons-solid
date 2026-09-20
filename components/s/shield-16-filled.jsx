import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.w990xg45e {
  fill: currentColor;
  d: path("M7.647 2.146a.5.5 0 0 1 .708 0C9.595 3.39 10.969 4 12.5 4a.5.5 0 0 1 .5.5v3.001c0 3.219-1.641 5.407-4.842 6.473a.5.5 0 0 1-.316 0C4.642 12.908 3 10.72 3 7.501V4.5a.5.5 0 0 1 .5-.5c1.53 0 2.904-.611 4.147-1.854");
}
</style><path class="w990xg45e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:shield-16-filled"} {...others} />);
}

export default Component;
