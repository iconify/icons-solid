import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.p6-9d6bod {
  fill: var(--svg-color--fff, #fff);
  d: path("M13.667 14.334L8.333 11V9.667L13.666 13z");
}

.pr4uw_bxm {
  fill: var(--svg-color--fff, #fff);
  d: path("M8.333 9.667H20V11H8.333zm5.334 4.666H4V13h9.667z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="p6-9d6bod"/><path class="pr4uw_bxm"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ubsn-background"} {...others} />);
}

export default Component;
