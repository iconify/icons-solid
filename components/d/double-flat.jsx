import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fxnn12b2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v17.5M5 14c1.5-2.5 5.5-3 5.5 0s-3 5-5.5 6.5M13.5 3v17.5m0-6.5c1.5-2.5 5.5-3 5.5 0s-3 5-5.5 6.5");
}
</style><path class="fxnn12b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:double-flat"} {...others} />);
}

export default Component;
