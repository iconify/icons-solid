import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.e4iycnbxv {
  fill: currentColor;
  d: path("M3.22 24.78a.75.75 0 0 1 0-1.06L22.44 4.5h-9.69a.75.75 0 0 1 0-1.5h11.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V5.56L4.28 24.78a.75.75 0 0 1-1.06 0");
}
</style><path class="e4iycnbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-28-regular"} {...others} />);
}

export default Component;
