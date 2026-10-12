import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prerp1uph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h11.5m-11.5 5h18.5m-18.5 5h13m-13 5c1.25-1.5 2-1.5 3.25 0s2 1.5 3.25 0s2-1.5 3.25 0s2 1.5 3.25 0");
}
</style><path class="prerp1uph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:linter"} {...others} />);
}

export default Component;
