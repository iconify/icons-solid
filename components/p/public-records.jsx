import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mqpo4b_5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25a2 2 0 0 1 2-2h4.5l2 2.5h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2ZM7 12.75h10m-10 3.5h6.5");
}
</style><path class="mqpo4b_5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:public-records"} {...others} />);
}

export default Component;
