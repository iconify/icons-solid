import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rqg_82bki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2h5.5L17 4.25v1L14.75 7.5h-5.5L7 5.25v-1Zm1.25 5.5v3m3-3v3m-9.5 0h16v11H4ZM10.25 2v5.5m3.5-5.5v5.5M4 14.5h16");
}
</style><path class="rqg_82bki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-fragrance"} {...others} />);
}

export default Component;
