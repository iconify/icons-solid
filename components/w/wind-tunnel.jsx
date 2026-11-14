import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.te7k1j_zu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5c4.5 0 5.5 3 9.5 3h9.5m-19 14c4.5 0 5.5-3 9.5-3h9.5M4.5 12H19m-2.25-2.25L19 12l-2.25 2.25");
}
</style><path class="te7k1j_zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wind-tunnel"} {...others} />);
}

export default Component;
