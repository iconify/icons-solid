import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8hbe6atr {
  d: path("M14 9v7.5");
}

.uc38txb3u {
  d: path("M8.5 16.5h7");
}

.wqx96pbyf {
  d: path("M10 12v4.5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="wqx96pbyf"/><path class="p8hbe6atr"/><path class="uc38txb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-chart-outline-thin"} {...others} />);
}

export default Component;
