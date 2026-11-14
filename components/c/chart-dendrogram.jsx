import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sb4dk6b_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h5m0-5v10m0-10H14M8.5 17H14m0-12.5v5m0 5v5m0-15h6.5m-6.5 5h6.5m-6.5 5h6.5m-6.5 5h6.5");
}
</style><path class="sb4dk6b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-dendrogram"} {...others} />);
}

export default Component;
