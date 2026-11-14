import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fuf_r5b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h18c0 3-4 4.5-9 4.5s-9-1.5-9-4.5Zm10.5 0l2-2.5c1-1.25 2-1.5 3-1.5l.25-1.25A1.75 1.75 0 0 1 21.5 6l-1 2c-.25 1.5-1 2.5-2.5 2.5ZM12 15v5m-4 0h8");
}
</style><path class="fuf_r5b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bird-bath"} {...others} />);
}

export default Component;
