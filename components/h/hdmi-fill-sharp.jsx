import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.slx4rzbxr {
  fill: currentColor;
  d: path("M21 6a1 1 0 0 1 1 1v4a1 1 0 0 1-.168.555l-4 6A1 1 0 0 1 17 18H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 2 11V7a1 1 0 0 1 1-1ZM8 10a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z");
}
</style><path class="slx4rzbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hdmi-fill-sharp"} {...others} />);
}

export default Component;
