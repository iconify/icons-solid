import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.e7sbwh53v {
  fill: currentColor;
  d: path("M16 2.75c.69 0 1.25.56 1.25 1.25v10.75H28a1.25 1.25 0 1 1 0 2.5H17.25V28a1.25 1.25 0 1 1-2.5 0V17.25H4a1.25 1.25 0 1 1 0-2.5h10.75V4c0-.69.56-1.25 1.25-1.25");
}
</style><path class="e7sbwh53v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:add-32-filled"} {...others} />);
}

export default Component;
