import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gai6szckt {
  fill: currentColor;
  d: path("M13.5 1.75a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5zM6 4.25a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1 0-1.5zm.75 3.25A.75.75 0 0 0 6 6.75H2.5a.75.75 0 0 0 0 1.5H6a.75.75 0 0 0 .75-.75M6 9.25a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1 0-1.5zm8.25 3.25a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75M12.75 7a1.75 1.75 0 1 0-3.5 0v3.5a.75.75 0 0 1-1.5 0V7a3.25 3.25 0 1 1 6.5 0v3.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="gai6szckt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-position-square-right-16-filled"} {...others} />);
}

export default Component;
