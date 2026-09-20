import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dsi4bsbja {
  fill: var(--svg-color--fff, #fff);
  d: path("M18 16v4l-6-6v-4z");
}

.e6a6lwxhv {
  fill: var(--svg-color--fc0, #fc0);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.ika638bmm {
  fill: var(--svg-color--fff, #fff);
  d: path("m6 4l6 6l-1.893 2.102L6 8z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.uju-z-b4n {
  fill: var(--svg-color--fff, #fff);
  d: path("M18 4v4L6 19.981V16z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="e6a6lwxhv"/><path class="ika638bmm"/><path class="uju-z-b4n"/><path class="dsi4bsbja"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ltx-background"} {...others} />);
}

export default Component;
