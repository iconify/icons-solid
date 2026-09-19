import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.uy_i21k3w {
  fill: currentColor;
  d: path("M53.213 10.788c-11.715-11.717-30.711-11.717-42.426 0c-11.716 11.715-11.716 30.711 0 42.426s30.711 11.715 42.426 0s11.716-30.711 0-42.426M52 46h-5.219V32l-17.39 14V32L12 46V18l17.392 14V18l17.39 14V18H52z");
}
</style><path class="uy_i21k3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:next-track-button"} {...others} />);
}

export default Component;
