import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ek7-tyb4n {
  fill: currentColor;
  d: path("M28.75 25a1.25 1.25 0 1 1 0 2.5H8.25a1.25 1.25 0 1 1 0-2.5zm-20-16a6.75 6.75 0 1 1 0 13.5a6.75 6.75 0 0 1 0-13.5m0 3a.75.75 0 0 0-.75.75V15H5.75a.75.75 0 0 0 0 1.5H8v2.25a.75.75 0 0 0 1.5 0V16.5h2.25a.75.75 0 0 0 0-1.5H9.5v-2.25a.75.75 0 0 0-.75-.75m20 6a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5H8.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="ek7-tyb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-expand-32-filled"} {...others} />);
}

export default Component;
