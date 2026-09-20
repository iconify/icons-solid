import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vins6khmq {
  fill: currentColor;
  d: path("M9 15.348L12.348 12L9 8.652L5.652 12zm0 1.421L4.23 12L9 7.23l4.27 4.27h7.653v1h-7.654zM9 12");
}
</style><path class="vins6khmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-diamond-outline"} {...others} />);
}

export default Component;
