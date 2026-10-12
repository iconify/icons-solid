import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6bdh6bmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h12v11.5H10l-4 3.5v-3.5H2.75V3.75zM6.5 8H13m-6.5 3h4M19 6.25l2.438 3.25L19 12.75");
}
</style><path class="i6bdh6bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:freedom-of-speech-sharp"} {...others} />);
}

export default Component;
