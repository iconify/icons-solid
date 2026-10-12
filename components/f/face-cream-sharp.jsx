import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx7gp_bhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9.5A6.25 4.25 0 0 1 12 5.25l.893-2.5H15l-.617 2.005L15.75 6.05c1.5.8 2.5 2 2.5 3.45Zm-2.5 3h17.5v8.75H3.25zM8 16.75h8");
}
</style><path class="qx7gp_bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:face-cream-sharp"} {...others} />);
}

export default Component;
