import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.errpswf4y {
  fill: var(--svg-color--68ffd2, #68ffd2);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.q4i2uutea {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("m4 5l8 14l8-14zm4.42 2.5l1.255 2.34L8.5 11.5h2.135L12 14l3.425-6.5z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="errpswf4y"/><path clip-rule="evenodd" class="q4i2uutea"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vpad-background"} {...others} />);
}

export default Component;
