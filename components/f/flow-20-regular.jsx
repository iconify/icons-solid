import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.wynhdyu5w {
  fill: currentColor;
  d: path("M15 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2.959 1.5a3 3 0 1 1 0 1H12A1.5 1.5 0 0 0 10.5 9v2A2.5 2.5 0 0 1 8 13.5h-.042a3 3 0 1 1 0-1H8A1.5 1.5 0 0 0 9.5 11V9A2.5 2.5 0 0 1 12 6.5zM5 11a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="wynhdyu5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flow-20-regular"} {...others} />);
}

export default Component;
