import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.pvs8ll98b {
  fill: var(--svg-color--fff, #fff);
  d: path("m16 11.726l-4 2.22l-4-2.22l-4 2.22l4 2.234l4 2.22l4-2.22l4-2.234z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.scx87gbfr {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 12.276l4-2.222l4-2.234l-4-2.22l-4 2.22L8 5.6L4 7.82l4 2.234z");
}

.uaq2iibrb {
  fill: var(--svg-color--8530f1, #8530f1);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="uaq2iibrb"/><path class="scx87gbfr"/><path class="pvs8ll98b"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:elastos-background"} {...others} />);
}

export default Component;
