import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w3mk7h0qt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l3.75 5H21v-2.5H8l-3-4ZM1.935 6.612l3.214-3.831l1.916 1.607l-3.214 3.831ZM8 14v7m11-7v7M6 21h4m7 0h4");
}
</style><path class="w3mk7h0qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:examination-couch"} {...others} />);
}

export default Component;
