import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvujpjc_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5c2.5 3.5 5.5 5 9 5s6.5-1.5 9-5m-15.5 3l-2 2.5m6-.75l-.75 3m5.75-3l.75 3m3.25-4.75l2 2.5");
}
</style><path class="wvujpjc_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:eye-closed"} {...others} />);
}

export default Component;
