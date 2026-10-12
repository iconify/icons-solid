import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t1tmmoblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h8.5v2.5h-8.5zm8.5 5h10v2.5h-10zm-6.5-2.5v11.5m14.5-6.5v6.5m-3-18.5v5.5m-2-2l2 2l2-2");
}
</style><path class="t1tmmoblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lowered-counter-sharp"} {...others} />);
}

export default Component;
