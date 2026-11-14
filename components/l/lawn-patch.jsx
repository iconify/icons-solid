import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkplpdb_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18h19m-18 0v-8m2.75 8V8m11.5 10V8m2.75 10v-8M12 18v-5.5m0 2Q12 11 9 11q0 3.5 3 3.5m0-1q0-3.5 3-3.5q0 3.5-3 3.5");
}
</style><path class="wkplpdb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lawn-patch"} {...others} />);
}

export default Component;
