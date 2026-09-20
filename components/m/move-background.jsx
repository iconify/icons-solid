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

.u82lr5bax {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 12h3.097v6.194H4zm3.097 0h3.613v6.194h3.096v-9.29h-6.71zm6.71-6.193v3.096h3.096v9.29H20V5.808z");
}

.y8siktbil {
  fill: var(--svg-color--6fe9b1, #6fe9b1);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="y8siktbil"/><path class="u82lr5bax"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:move-background"} {...others} />);
}

export default Component;
