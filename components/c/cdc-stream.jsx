import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8ret4h-u {
  d: path("M2.5 12a5 2.5 0 0 0 10 0m3 0h6m-3-3l3 3l-3 3");
}

.gbzhlwajq {
  d: path("M2.5 6a5 2.5 0 1 0 10 0a5 2.5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-aeb6ber {
  d: path("M2.5 6v12a5 2.5 0 0 0 10 0V6");
}
</style><g class="hntgybcog"><path class="gbzhlwajq"/><path class="m-aeb6ber"/><path class="g8ret4h-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cdc-stream"} {...others} />);
}

export default Component;
