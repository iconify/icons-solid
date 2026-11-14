import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fma26bbip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19m-19 0c0-3.5 1.5-4.5 3-4.5s2 1.5 1 2.5m3 2c0-7.5 1.5-9 3.25-9s2.25 2 1 3m2.75 6c0-12 1-15 3-15c1.75 0 2.25 2 1 3");
}
</style><path class="fma26bbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rapids-grade"} {...others} />);
}

export default Component;
