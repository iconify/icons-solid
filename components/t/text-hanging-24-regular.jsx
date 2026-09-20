import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnxy45bka {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm7 13a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zM9 12.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75m-5.22.72a.75.75 0 0 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z");
}
</style><path class="fnxy45bka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-hanging-24-regular"} {...others} />);
}

export default Component;
