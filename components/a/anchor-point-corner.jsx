import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rvqbacc0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20C3 13 7 8 12 6.5m4 1l5 12M13.5 4h1A1.5 1.5 0 0 1 16 5.5v1A1.5 1.5 0 0 1 14.5 8h-1A1.5 1.5 0 0 1 12 6.5v-1A1.5 1.5 0 0 1 13.5 4");
}
</style><path class="rvqbacc0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:anchor-point-corner"} {...others} />);
}

export default Component;
