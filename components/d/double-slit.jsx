import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9gffmm1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3v5m0 2.75v2.5m0 2.75v5m14-18v18M9 8a6 6 0 0 1 0 8m3-10.5a10 10 0 0 1 0 13M18.5 7h3m-3 5h3m-3 5h3");
}
</style><path class="u9gffmm1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:double-slit"} {...others} />);
}

export default Component;
