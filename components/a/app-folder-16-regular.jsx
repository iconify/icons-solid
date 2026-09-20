import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.t50erw02v {
  fill: currentColor;
  d: path("M4 5a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2.5 0H5v1.5h1.5zM5 8.5a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1zm0 1h1.5V11H5zM8.5 5a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1zM11 5H9.5v1.5H11zM9.5 8.5a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1zm0 1H11V11H9.5zM2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z");
}
</style><path class="t50erw02v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:app-folder-16-regular"} {...others} />);
}

export default Component;
