import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qe6674yyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h12l1.5 13.5H14L12 13l-2 8.5H4.5Zm1.5 0l1-5.5m8 5.5l-1-5.5m-10.75 16h6m2.5 0h6");
}
</style><path class="qe6674yyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ski-pants"} {...others} />);
}

export default Component;
