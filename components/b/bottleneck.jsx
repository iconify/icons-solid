import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-3c2vw_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5C8 4.5 8.5 9 12 9s4-4.5 9.5-4.5m-19 15c5.5 0 6-4.5 9.5-4.5s4 4.5 9.5 4.5M6 12h11m-2-2l2 2l-2 2");
}
</style><path class="b-3c2vw_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bottleneck"} {...others} />);
}

export default Component;
