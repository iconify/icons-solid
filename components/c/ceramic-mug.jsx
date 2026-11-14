import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hro631bab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h12v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 4h1.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H16");
}
</style><path class="hro631bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ceramic-mug"} {...others} />);
}

export default Component;
