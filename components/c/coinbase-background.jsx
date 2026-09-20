import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.kc7uf2pic {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0");
}

.l95ihob0x {
  fill: var(--svg-color--0e5bff, #0e5bff);
  fill-rule: evenodd;
  d: path("M12 17.667a5.667 5.667 0 1 0 0-11.334a5.667 5.667 0 0 0 0 11.334m-.667-7.334a1 1 0 0 0-1 1v1.334a1 1 0 0 0 1 1h1.334a1 1 0 0 0 1-1v-1.334a1 1 0 0 0-1-1z");
}

.p_jdkacqt {
  fill: var(--svg-color--0e5bff, #0e5bff);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="p_jdkacqt"/><path class="kc7uf2pic"/><path clip-rule="evenodd" class="l95ihob0x"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:coinbase-background"} {...others} />);
}

export default Component;
