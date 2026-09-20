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

.u23qqtbff {
  fill: var(--svg-color--20fe9c, #20fe9c);
  d: path("M24 0H0v24h24z");
}

.wfgcz4l_p {
  fill: var(--svg-color--000, #000);
  d: path("M19.98 8.207c.542 2.153-10.133 7.473-14.973 8.738c-4.839 1.264 9.358-4.97 8.804-7.123s-11.87-.388-7.03-1.653c4.839-1.264 12.657-2.115 13.2.038");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="u23qqtbff"/><path class="wfgcz4l_p"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:trb-background"} {...others} />);
}

export default Component;
