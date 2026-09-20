import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vpvy20bdq {
  fill: currentColor;
  d: path("M16.258 10.5a.75.75 0 0 0 0-1.5H7.77a.75.75 0 0 0 0 1.5zm0 4.5a.75.75 0 0 0 0-1.5H7.77a.75.75 0 0 0 0 1.5zM22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17");
}
</style><path class="vpvy20bdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:equal-circle-24-regular"} {...others} />);
}

export default Component;
