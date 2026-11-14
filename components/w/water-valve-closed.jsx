import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q208xg2hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5H8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h5.5m0 5H16v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2H2.5m9.5-12v15m-4-15h8");
}
</style><path class="q208xg2hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-valve-closed"} {...others} />);
}

export default Component;
