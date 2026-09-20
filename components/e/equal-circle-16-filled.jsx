import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ptg532byr {
  fill: currentColor;
  d: path("M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M4.5 6.5A.5.5 0 0 0 5 7h6a.5.5 0 0 0 0-1H5a.5.5 0 0 0-.5.5M5 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="ptg532byr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:equal-circle-16-filled"} {...others} />);
}

export default Component;
