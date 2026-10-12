import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xr02vsroo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.28 5.5L13.5 3.72l-.88-.88l-.88.88l-6.02 6.02l-.88.88l.88.88l1.78 1.78l.88.88l.88-.88l6.02-6.02l.88-.88zm-2.78 5l7.25 7.25m-17 0h9v3.5h-9z");
}
</style><path class="xr02vsroo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gavel-sharp"} {...others} />);
}

export default Component;
