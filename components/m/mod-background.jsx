import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.nrpop674w {
  fill: var(--svg-color--fff, #fff);
  d: path("m6 20l7.826-7.961l-7.554-7.675L6 4.09z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xm70evkqw {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.913 10.165L18 16.355V4z");
}

.xzsyrjbmk {
  fill: var(--svg-color--253750, #253750);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xzsyrjbmk"/><path class="xm70evkqw"/><path class="nrpop674w"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mod-background"} {...others} />);
}

export default Component;
