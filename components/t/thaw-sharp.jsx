import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7qxtzdzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.25v9.5m4.11-7.12l-8.22 4.75m8.22 0L3.89 5.63m12.08 2.76l-3.48 6.63a4.25 4.25 0 1 0 7.52 0l-3.48-6.63l-.28-.53z");
}
</style><path class="m7qxtzdzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:thaw-sharp"} {...others} />);
}

export default Component;
