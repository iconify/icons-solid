import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue1u3ub-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h8v8h-8zm10.5 0h8v8h-8zm-10.5 10.5h8v8h-8zm12 1.25v-1.25h6v8.444l-.95-.594l-2.05-1.5l-2.05 1.5l-.95.594V20.6Z");
}
</style><path class="ue1u3ub-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:collection-grid-sharp"} {...others} />);
}

export default Component;
