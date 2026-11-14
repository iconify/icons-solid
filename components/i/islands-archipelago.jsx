import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gflxs44jk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h1c1-9 6.5-9 7.5 0h1.5c.75-5.5 3.75-5.5 4.5 0h.5c.5-2.75 3-2.75 3.5 0h.5M4 16q2.5-1.5 5 0t5 0t5 0M7 20q2.5-1.5 5 0t5 0");
}
</style><path class="gflxs44jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:islands-archipelago"} {...others} />);
}

export default Component;
