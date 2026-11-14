import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0arz6x7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 18l.5-12.25l1.5-2l1.5 2L14 18Zm-5.5 3.5v-1.75h2.75V18h9.5v1.75h2.75v1.75Zm6-15.75h3");
}
</style><path class="h0arz6x7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:landmark-nearby"} {...others} />);
}

export default Component;
