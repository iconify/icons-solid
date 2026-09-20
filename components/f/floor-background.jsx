import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8qphwbni {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 11.059h16v1.882H4z");
}

.ft5dv1b6b {
  fill: none;
}

.jhy0_rbnw {
  fill: var(--svg-color--00f3d5, #00f3d5);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="jhy0_rbnw"/><path class="e8qphwbni"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:floor-background"} {...others} />);
}

export default Component;
