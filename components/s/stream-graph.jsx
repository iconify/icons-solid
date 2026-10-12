import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6jf-2iqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5c4.25 0 5-3.25 9.25-3.25S17 8 21.25 8v3.5C17 11.5 16 10 12 10s-5 .75-9.25.75Zm0 5.75C7 13.25 8 12.5 12 12.5s5 1.5 9.25 1.5v2C17 16 16.5 19.75 12 19.75S7 16.5 2.75 16.5Z");
}
</style><path class="a6jf-2iqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stream-graph"} {...others} />);
}

export default Component;
