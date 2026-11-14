import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ngk0w_88e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21q3-7 1-12h6q-2 5 1 12Zm11 0q3-7 1-12h6q-2 5 1 12ZM4 6.25a1.75 1.75 0 0 1 2.5-2a1.75 1.75 0 0 1 2.5 2m6 0a1.75 1.75 0 0 1 2.5-2a1.75 1.75 0 0 1 2.5 2");
}
</style><path class="ngk0w_88e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cooling-tower-plant"} {...others} />);
}

export default Component;
