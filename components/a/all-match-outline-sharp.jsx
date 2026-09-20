import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h26dde5vp {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h14l6 8l-.125.175q-.675-.45-1.463-.737t-1.637-.388L15 6H6l4.5 6L6 18h5q0 .525.075 1.025T11.3 20zm15.275.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075zM18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23");
}
</style><path class="h26dde5vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:all-match-outline-sharp"} {...others} />);
}

export default Component;
