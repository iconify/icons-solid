import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7j2hrbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h5m0 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7 0h7m-18 6.5v2m8.5-2v2m8.5-2v2");
}
</style><path class="h7j2hrbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fine-tune"} {...others} />);
}

export default Component;
