import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.mu8na3byv {
  fill: var(--svg-color--fff, #fff);
  d: path("M6.134 4H10.4v16H6.134zm11.732 0h-6.933l6.933 6.4zm0 16v-6.4L10.933 20z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.wrsrm3dee {
  fill: var(--svg-color--ec793e, #ec793e);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="wrsrm3dee"/><path class="mu8na3byv"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:exd-background"} {...others} />);
}

export default Component;
