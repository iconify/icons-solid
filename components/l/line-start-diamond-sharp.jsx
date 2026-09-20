import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hp9dc8bhs {
  fill: currentColor;
  d: path("M9 16.77L4.23 12L9 7.23l4.27 4.27h7.653v1h-7.654z");
}
</style><path class="hp9dc8bhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-diamond-sharp"} {...others} />);
}

export default Component;
