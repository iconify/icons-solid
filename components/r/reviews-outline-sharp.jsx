import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ym9rrrhax {
  fill: currentColor;
  d: path("M9.075 14.25L12 12.475l2.925 1.775l-.775-3.325l2.6-2.25l-3.425-.275L12 5.25L10.675 8.4l-3.425.275l2.6 2.25zM2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="ym9rrrhax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reviews-outline-sharp"} {...others} />);
}

export default Component;
