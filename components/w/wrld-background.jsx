import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.o0xc09b1y {
  fill: var(--svg-color--03f, #03f);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.zui-labwq {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 6.947l-8 3.369v3.368l8 3.368l8-3.368v-3.368zm0 1.263l6.737 2.809L12 14.105L5.263 11.02z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="o0xc09b1y"/><path class="zui-labwq"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:wrld-background"} {...others} />);
}

export default Component;
