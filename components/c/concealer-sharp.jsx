import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cv78zv_tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5H11v13.75H4.5zm0 3.5H11m5.25-8.25l1.65 1.875V5.6a1.65 1.65 0 0 1-3.3 0v-.975zm0 6.25v2.25m-2.25 0h4.5v10H14z");
}
</style><path class="cv78zv_tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:concealer-sharp"} {...others} />);
}

export default Component;
