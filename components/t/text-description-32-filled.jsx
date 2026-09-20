import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.pb6hw_f5p {
  fill: currentColor;
  d: path("M3.25 6a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5zm0 6a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5zM2 19.25c0-.69.56-1.25 1.25-1.25h25.5a1.25 1.25 0 1 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25M3.25 24a1.25 1.25 0 1 0 0 2.5h16.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="pb6hw_f5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-description-32-filled"} {...others} />);
}

export default Component;
