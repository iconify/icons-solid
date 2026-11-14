import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_ycn5b4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-18 0V9l1-2l1 2v12.5m5.5 0V9l1-2l1 2v12.5m5.5 0V9l1-2l1 2v12.5M7 14h2.5m5 0H17");
}
</style><path class="t_ycn5b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:property-boundary"} {...others} />);
}

export default Component;
