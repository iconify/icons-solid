import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cglk3sn_s {
  fill: var(--svg-color--fff, #fff);
  d: path("M4.8 6.311L12 4v16c-5.143-2.134-7.2-6.222-7.2-8.533zm14.4 0L12 4v16c5.143-2.134 7.2-6.222 7.2-8.533z");
}

.ft5dv1b6b {
  fill: none;
}

.igi_-gs6l {
  fill: var(--svg-color--0500ff, #0500ff);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="igi_-gs6l"/><path class="cglk3sn_s"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:trust-background"} {...others} />);
}

export default Component;
