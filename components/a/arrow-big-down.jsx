import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3h7tqkit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.144 18.644l-4.553-4.553A.932.932 0 0 1 6.25 12.5a2.25 2.25 0 0 0 2.25-2.25V6.125A2.625 2.625 0 0 1 11.125 3.5h1.75A2.625 2.625 0 0 1 15.5 6.125v4.125a2.25 2.25 0 0 0 2.25 2.25a.932.932 0 0 1 .659 1.591l-4.553 4.553a2.625 2.625 0 0 1-3.712 0");
}
</style><path class="h3h7tqkit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-big-down"} {...others} />);
}

export default Component;
