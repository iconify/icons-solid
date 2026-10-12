import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdmr5xbqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h18.5a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6m9.25 6v3.5m-2.25-9.5V6a2.25 2.25 0 0 1 4.5 0v.75");
}
</style><path class="tdmr5xbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sink"} {...others} />);
}

export default Component;
