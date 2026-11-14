import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rj20akb4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5C8 5 16 5 20 6.5c1.5 1.5 1.5 6.5 0 8c-4 1.5-12 1.5-16 0C2.5 13 2.5 8 4 6.5m-1.5 12h19m-15-8h11");
}
</style><path class="rj20akb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kneeling-pad"} {...others} />);
}

export default Component;
