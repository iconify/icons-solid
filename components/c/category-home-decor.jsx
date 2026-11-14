import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bua2tjetc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10h5m-4 0v2.75C5 13.75 5 21.5 10 21.5h4c5 0 5-7.75-.5-8.75V10M12 2v8m0-4.75c-2.5 0-4.5-.75-5-2.75c2.5 0 4.5.75 5 2.75Zm0 2c2.5 0 4.5-1 5-3c-2.5 0-4.5 1-5 3Z");
}
</style><path class="bua2tjetc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-home-decor"} {...others} />);
}

export default Component;
