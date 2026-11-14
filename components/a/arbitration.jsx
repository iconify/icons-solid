import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2r6i1awc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5v17m-3 0h5.3M4.5 5h11m-11 0l-2 5a2 2 0 0 0 4 0Zm11 0l-2 5a2 2 0 0 0 4 0Zm2.189 9.818l4.243 4.243l-2.121 2.121l-4.243-4.243ZM17.75 19l-2.5 2.5");
}
</style><path class="e2r6i1awc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arbitration"} {...others} />);
}

export default Component;
