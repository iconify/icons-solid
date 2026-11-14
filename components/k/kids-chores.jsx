import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bic5_uc6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.5V14M3 21.5L4.25 14h4l1.25 7.5ZM16 8l1.25 3.25l3.5.25L18 13.75L19 17l-3-2l-3 2l1-3.25l-2.75-2.25l3.5-.25Z");
}
</style><path class="bic5_uc6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kids-chores"} {...others} />);
}

export default Component;
