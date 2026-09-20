import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.tk3f2acfk {
  fill: currentColor;
  d: path("M5.754 8a3.75 3.75 0 0 0-3.75 3.75v4.5A3.75 3.75 0 0 0 5.754 20H22.25A3.75 3.75 0 0 0 26 16.25v-4.5A3.75 3.75 0 0 0 22.25 8zm12.996 4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m2.75 1.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5");
}
</style><path class="tk3f2acfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:storage-28-filled"} {...others} />);
}

export default Component;
