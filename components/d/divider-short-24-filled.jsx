import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p7vsbhs2e {
  fill: currentColor;
  d: path("M11 5v14a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0");
}
</style><path class="p7vsbhs2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:divider-short-24-filled"} {...others} />);
}

export default Component;
