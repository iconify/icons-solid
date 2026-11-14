import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y289fvbdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0ZM9.5 3.75v11.5m5-11.5v11.5m-12 4.25q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="y289fvbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:safe-water-mark"} {...others} />);
}

export default Component;
