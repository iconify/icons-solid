import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-o3j8bvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h2.5m2.5 0h2.5m2.5 0h2.5m2.5 0h2.5M8.575 9h8.05V3l-1.01.65l-7.23 4.7l-1.01.65zm0 6h8.05v6l-1.01-.65l-7.23-4.7l-1.01-.65z");
}
</style><path class="q-o3j8bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flip-vertical-sharp"} {...others} />);
}

export default Component;
