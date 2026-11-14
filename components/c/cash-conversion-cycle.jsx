import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rf3igihhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 4.5a7.75 7.75 0 0 1 5.5 9.5m2-1l-2 1l-1-2m-1 5.5a7.75 7.75 0 0 1-11 0m2.25 0H6.5v2.25M4.5 14A7.75 7.75 0 0 1 10 4.5m-1.25 2l1.25-2l-2-1m.5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5-1.75v3.5");
}
</style><path class="rf3igihhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cash-conversion-cycle"} {...others} />);
}

export default Component;
