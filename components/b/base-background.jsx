import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axlnbfv_l {
  fill: var(--svg-color--00f, #00f);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.lg5e_kecb {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 5.517c0-.52 0-.78.098-.98a.96.96 0 0 1 .44-.44C4.738 4 4.998 4 5.517 4h12.966c.52 0 .78 0 .98.098a.97.97 0 0 1 .439.44c.098.2.098.46.098.979v12.966c0 .52 0 .78-.098.98a.96.96 0 0 1-.44.439c-.2.098-.46.098-.979.098H5.517c-.52 0-.78 0-.98-.098a.96.96 0 0 1-.439-.44C4 19.263 4 19.002 4 18.484z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="axlnbfv_l"/><path class="lg5e_kecb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:base-background"} {...others} />);
}

export default Component;
