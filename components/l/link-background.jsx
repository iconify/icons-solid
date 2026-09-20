import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hi5v994og {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 4l6.43 3.851v7.794L11.082 20v-1.098l-5.496-3.285l-.016-7.72zm.008 13.316l4.585-2.715V8.894l-4.592-2.748L7.408 8.93v5.644z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qlp3nfh9z {
  fill: var(--svg-color--2e61de, #2e61de);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="qlp3nfh9z"/><path class="hi5v994og"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:link-background"} {...others} />);
}

export default Component;
