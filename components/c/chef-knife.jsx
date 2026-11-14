import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ec7myjd1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 12.5l9.5-9.5c1 4.5.5 8-2.5 11L13 16.75Zm.987 1.141l2.122 2.122l-4.596 4.596l-2.122-2.122Z");
}
</style><path class="ec7myjd1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chef-knife"} {...others} />);
}

export default Component;
