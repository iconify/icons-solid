import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.kwlbwwbsv {
  fill: currentColor;
  d: path("M14 3.25a.75.75 0 0 1 .75.75v9.25H24a.75.75 0 0 1 0 1.5h-9.25V24a.75.75 0 0 1-1.5 0v-9.25H4a.75.75 0 0 1 0-1.5h9.25V4a.75.75 0 0 1 .75-.75");
}
</style><path class="kwlbwwbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:add-28-regular"} {...others} />);
}

export default Component;
