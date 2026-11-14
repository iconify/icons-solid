import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bg9sz8lca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 18.5a5.5 2.5 0 1 0 11 0a5.5 2.5 0 1 0-11 0ZM3.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9.75.5Q15.5 9 15.5 13");
}
</style><path class="bg9sz8lca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:golf-putt"} {...others} />);
}

export default Component;
