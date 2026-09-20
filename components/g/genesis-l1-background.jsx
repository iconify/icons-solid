import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.beaf9ac8r {
  fill: var(--svg-color--fff, #fff);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.ph05zkbgg {
  fill: var(--svg-color--1a1a1a, #1a1a1a);
  d: path("M14.25 9.75L16.5 12l-6.75 6.75L12 21l9-9l-2.25-2.25z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.yncdsfrgo {
  fill: var(--svg-color--000, #000);
  d: path("m12 3l-9 9l4.5 4.5l2.25-2.25L7.5 12l6.75-6.75z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="beaf9ac8r"/><path class="yncdsfrgo"/><path class="ph05zkbgg"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:genesis-l1-background"} {...others} />);
}

export default Component;
