import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayypkug1b {
  fill: var(--svg-color--fff, #fff);
  d: path("M18 10.4a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}

.f3orm7_9f {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M15.2 12.058V12a5.6 5.6 0 1 0-5.6 5.6h5.6z");
}

.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path clip-rule="evenodd" class="f3orm7_9f"/><path class="ayypkug1b"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:atr-background"} {...others} />);
}

export default Component;
