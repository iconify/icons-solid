import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmizeqb3b {
  fill: currentColor;
  d: path("M18 9.86v4.28L14.97 12zm-9 0v4.28L5.97 12zM20 6l-8.5 6l8.5 6zm-9 0l-8.5 6l8.5 6z");
}
</style><path class="jmizeqb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-fast-rewind"} {...others} />);
}

export default Component;
