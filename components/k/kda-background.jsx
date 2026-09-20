import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.m9ctkb9fh {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.428 20h-4.952l-5.08-7.238l2.032-4.19zM4.571 4h4v16h-4z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.tl7b3xbpt {
  fill: var(--svg-color--6a0097, #6a0097);
  d: path("M24 0H0v24h24z");
}

.y0khasbsd {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.54 4h-4.572L8.571 9.5v4.998z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="tl7b3xbpt"/><path class="m9ctkb9fh"/><path class="y0khasbsd"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:kda-background"} {...others} />);
}

export default Component;
