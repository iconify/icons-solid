import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.lhar-tiyx {
  fill: currentColor;
  d: path("M2.5 1.75a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm7.5 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM9.25 7.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75M10 9.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM1.75 12.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75M3.25 7a1.75 1.75 0 1 1 3.5 0v3.5a.75.75 0 0 0 1.5 0V7a3.25 3.25 0 1 0-6.5 0v3.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="lhar-tiyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-position-square-left-16-filled"} {...others} />);
}

export default Component;
