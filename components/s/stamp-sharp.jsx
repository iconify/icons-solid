import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxxzhkm4d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 8.2361L15 12L21 12L21 17L3 17L3 12L9 12L10 8.2361C9.3637 7.6669 9 6.8537 9 6C9 4.3431 10.3431 3 12 3C13.6569 3 15 4.3431 15 6C15 6.8537 14.6363 7.6669 14 8.2361ZM4 21L20 21");
}
</style><path class="qxxzhkm4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:stamp-sharp"} {...others} />);
}

export default Component;
