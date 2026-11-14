import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwytx3b7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5H8l6-4v11l-6-4H3.5Zm2.5 3v8m-2.5 0h5m8.25-12.25a4 4 0 0 1 0 5.5M19 5a7 7 0 0 1 0 10");
}
</style><path class="jwytx3b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:foghorn"} {...others} />);
}

export default Component;
