import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7d_-zbxs {
  d: path("m12.667 19.615l-.846.449q-.19.101-.398.153t-.423.052t-.423-.052t-.398-.153l-6.25-3.32q-.105-.056-.201-.125t-.182-.151q-.086-.081-.161-.174q-.074-.092-.135-.194t-.108-.211t-.078-.223t-.048-.232T3 15.198V7.802q0-.119.016-.236q.016-.118.048-.232q.031-.114.078-.223T3.25 6.9t.135-.194q.075-.093.161-.174q.086-.082.182-.151t.201-.125l6.25-3.32q.19-.101.398-.153T11 2.731t.423.052t.398.153l6.25 3.32q.105.056.201.125t.182.151t.161.174t.135.194t.108.211t.078.223q.032.114.048.232q.016.117.016.236v4.619");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yimmmv_ip {
  d: path("M3 6.75L11 11l8-4.25M11 11v9.5m7-5.5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="f7d_-zbxs"/><path class="yimmmv_ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:model-add"} {...others} />);
}

export default Component;
