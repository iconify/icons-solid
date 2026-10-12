import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xx2esmb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5H14.5l4.5-5h2.25m-10.75 5v4.75m-7.75 7.5h11.5l2.289.007l.611-2.207l1.35-5.3h-9a6 6 0 0 0-5.2 3Z");
}
</style><path class="xx2esmb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:plow-blade-sharp"} {...others} />);
}

export default Component;
