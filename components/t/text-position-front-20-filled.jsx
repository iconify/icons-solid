import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fz68m8_sp {
  fill: currentColor;
  d: path("M2.75 3.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75M10 6.25a2.25 2.25 0 0 0-2.122 1.5H6.325a3.751 3.751 0 0 1 7.35 0h-1.553A2.25 2.25 0 0 0 10 6.25m-3.75 5h1.5v2.25a.75.75 0 0 1-1.5 0zm7.5 0h-1.5v2.25a.75.75 0 0 0 1.5 0zM3.5 14.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5zm0-6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5z");
}
</style><path class="fz68m8_sp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-position-front-20-filled"} {...others} />);
}

export default Component;
