import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tai632byr {
  fill: currentColor;
  d: path("M13.5 9a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm4.5-2a8 8 0 1 0-16 0a8 8 0 0 0 16 0m-8-7a7 7 0 1 1 0 14a7 7 0 0 1 0-14");
}
</style><path class="tai632byr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:equal-circle-20-regular"} {...others} />);
}

export default Component;
