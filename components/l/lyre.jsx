import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vby1b5y-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20.25c-3-1-3.75-4.25-3.75-7.75V7.25C4.25 5.5 3.75 4 3 2.75m13 17.5c3-1 3.75-4.25 3.75-7.75V7.25c0-1.75.5-3.25 1.25-4.5M4.25 7.25h15.5M8 20.25h8m-7-13v13m3-13v13m3-13v13");
}
</style><path class="vby1b5y-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lyre"} {...others} />);
}

export default Component;
