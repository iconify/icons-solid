import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qg3mugb9c {
  fill: var(--svg-color--fff, #fff);
  d: path("m11.904 14.136l1.416 1.835L9.2 18.75zM12 5.25l2.184 3.55l-5.824 9.95H4zm0 7.814l2.912-2.128L20 18.75h-3.632z");
}

.s1w6blbfb {
  fill: var(--svg-color--3c87c7, #3c87c7);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="s1w6blbfb"/><path class="qg3mugb9c"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ardr-background"} {...others} />);
}

export default Component;
