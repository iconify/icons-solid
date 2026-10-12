import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4smjbsyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.5h18.5m-15.75 0c1.5-4 3.75-6 6.5-6s5 2 6.5 6Zm4.25 0l2-3.75m1.75 3.75l1.75-3");
}
</style><path class="r4smjbsyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:speed-bump-sharp"} {...others} />);
}

export default Component;
