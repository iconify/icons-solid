import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otz1mobbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19m-18 0v5.5L7 14m13.5 0v5.5L17 14m-7.25 0C7 11.5 7.5 8 10 6.5v-2h4v2c2.5 1.5 3 5 .25 7.5");
}
</style><path class="otz1mobbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:glass-display-shelf"} {...others} />);
}

export default Component;
