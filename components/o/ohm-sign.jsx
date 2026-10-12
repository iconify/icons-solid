import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnk46mrnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.25H9v-1.5a4.75 4.75 0 1 1 6 0v1.5h2.5m-14.75 5.5h3l1.5-2l2 3.75l2-3.75l2 3.75l2-3.75l1.5 2h3");
}
</style><path class="cnk46mrnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ohm-sign"} {...others} />);
}

export default Component;
