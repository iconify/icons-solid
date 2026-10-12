import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5syciqzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.89 4.46l7.47 3.83l.89.46l-.89.46l-7.47 3.83l-.89.46l-.89-.46l-7.47-3.83l-.89-.46l.89-.46l7.47-3.83L12 4zM6.5 11v4.5l2 2H12m5.5-4q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5Z");
}
</style><path class="l5syciqzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ai-tutor-sharp"} {...others} />);
}

export default Component;
