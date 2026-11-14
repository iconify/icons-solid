import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2-noumcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01m2.99-3.25L14 12.5m2.75-3.75L14 12.5m0 0V16m-2.25-3.25h4.5m-4.5 1.75h4.5");
}
</style><path class="l2-noumcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:price-tag-yen"} {...others} />);
}

export default Component;
