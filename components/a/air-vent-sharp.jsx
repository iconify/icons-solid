import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z50a626ue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 2.75h17.5v11.5H3.25zM7 7h10M7 10h10m-9.25 7.25l-1 1l1 1l1 1l-1 1m4.25-4l-1 1l1 1l1 1l-1 1m4.25-4l-1 1l1 1l1 1l-1 1");
}
</style><path class="z50a626ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:air-vent-sharp"} {...others} />);
}

export default Component;
