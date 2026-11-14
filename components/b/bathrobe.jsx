import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmyb3uf0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L4 6.5L2.5 13L6 14l1-3v10h10V11l1 3l3.5-1L20 6.5L15.5 3L12 9ZM7 14h10m-4 0l1.25 3.5");
}
</style><path class="xmyb3uf0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bathrobe"} {...others} />);
}

export default Component;
