import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3ynn-a9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.25 2.75l4 4.75l-3.5 4l4 4.5m0 0c-2.5-1-5.5-.25-5 2.25c.25 1.35 1.15 2.35 2 3");
}
</style><path class="d3ynn-a9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:eighth-rest"} {...others} />);
}

export default Component;
