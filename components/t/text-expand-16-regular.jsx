import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gg5n0xb2g {
  fill: currentColor;
  d: path("M13.5 13a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1zm-9-8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 1.5a.5.5 0 0 0-.5.5v1H3a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1H5v-1a.5.5 0 0 0-.5-.5m9 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1z");
}
</style><path class="gg5n0xb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-expand-16-regular"} {...others} />);
}

export default Component;
