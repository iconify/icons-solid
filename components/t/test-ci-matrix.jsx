import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ot5fqbb8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M2.5 12h19m-18-5.5l2.25 2.25l3.5-4.5m5.5 2.25L17 8.75l3.5-4.5M3.5 17.5l2.25 2.25l3.5-4.5m6 0l5 5m0-5l-5 5");
}
</style><path class="ot5fqbb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:test-ci-matrix"} {...others} />);
}

export default Component;
