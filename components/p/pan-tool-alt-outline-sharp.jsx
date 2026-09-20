import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8_wswimn {
  fill: currentColor;
  d: path("M8.525 21L1.15 11.925l1.775-1.7L7 13.075V2h2v14.925l-2.775-1.95L9.475 19H19V9h2v12zM11 13V6h2v7zm4 0V7h2v6zm-1 2");
}
</style><path class="c8_wswimn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pan-tool-alt-outline-sharp"} {...others} />);
}

export default Component;
