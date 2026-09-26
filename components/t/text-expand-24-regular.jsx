import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.on7ip4b2w {
  fill: currentColor;
  d: path("M21.25 18a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zM6.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V11H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H7V9.5a.5.5 0 0 0-.5-.5m14.75 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="on7ip4b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-expand-24-regular"} {...others} />);
}

export default Component;
