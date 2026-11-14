import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3r705xhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.237 9.518l9.526-5.5l2 3.464l-9.526 5.5ZM15 10.25L11.5 21M15 10.25L19 21M2.5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm0 14.5c0-4.5 1.25-7.5 3.5-7.5c1.25 0 2 .5 2.5 1.5");
}
</style><path class="u3r705xhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:astronomer"} {...others} />);
}

export default Component;
