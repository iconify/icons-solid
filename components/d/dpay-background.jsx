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

.s7panoxkd {
  fill: var(--svg-color--fff, #fff);
  d: path("M15.5 13a4.6 4.6 0 0 1-4.425 3.5H5V20h6.075A8 8 0 0 0 19 13zM5 4h6.075A8 8 0 0 1 19 11h-3.5a4.6 4.6 0 0 0-4.425-3.5H5zm0 5.5h3.5V11H5zM5 13h3.5v1.5H5z");
}

.t5tez4o_d {
  fill: var(--svg-color--7859e5, #7859e5);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="t5tez4o_d"/><path class="s7panoxkd"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:dpay-background"} {...others} />);
}

export default Component;
