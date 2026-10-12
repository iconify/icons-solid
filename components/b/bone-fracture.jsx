import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kv2v4bmhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10.75H7.62A2.25 2.25 0 1 0 4.47 12a2.25 2.25 0 1 0 3.15 1.25h2.88l-1-1l1.25-.75Zm4 2.5h2.38A2.25 2.25 0 1 0 19.53 12a2.25 2.25 0 1 0-3.15-1.25H13.5l1 1l-1.25.75ZM12 6.5v2m0 7v2");
}
</style><path class="kv2v4bmhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bone-fracture"} {...others} />);
}

export default Component;
