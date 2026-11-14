import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5t8h8bbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 17.5H2.5v-15H21v15h-.2M2.5 10H21M6.5 10V5.5m5 4.5v4.5m5-4.5V5.5m1.5 9V18m0 3h.01");
}
</style><path class="v5t8h8bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:breaker-tripped"} {...others} />);
}

export default Component;
