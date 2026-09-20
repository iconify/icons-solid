import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.deu647byb {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M5.066 4h4.8v4.8h-4.8zm0 11.2h4.8V20h-4.8zM9.333 12l5.333-8h4.267l-5.066 8l5.066 8h-4.267z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r600d-bfd {
  fill: var(--svg-color--12a8a7, #12a8a7);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="r600d-bfd"/><path clip-rule="evenodd" class="deu647byb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:kine-background"} {...others} />);
}

export default Component;
