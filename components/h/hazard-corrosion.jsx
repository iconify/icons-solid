import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqvwnackg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 9.5L7 3a2.25 2.25 0 0 0-3 3l6.5 6.5m-8 6.25h19v3h-19ZM13.75 13l1 1.75a1.25 1.25 0 1 1-2 0Zm4.5 0l1 1.75a1.25 1.25 0 1 1-2 0Z");
}
</style><path class="aqvwnackg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hazard-corrosion"} {...others} />);
}

export default Component;
