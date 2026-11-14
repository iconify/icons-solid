import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.co02f3b8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5c4.5 0 6.5-5 10.5-4s5.5-1.5 8.5-1M2.5 16C7 16 9 21 13 19.5s5.5 1 8.5.5m-19-9C7 11 9 8.5 13 9.5s5.5-1 8.5-.5m-19 4.5c4.5 0 6.5 2 10.5 1.25s5.5.75 8.5 0");
}
</style><path class="co02f3b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-streamgraph"} {...others} />);
}

export default Component;
